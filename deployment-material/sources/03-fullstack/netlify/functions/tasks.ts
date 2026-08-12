import type { Context } from "@netlify/functions";

interface Task {
  id: string;
  text: string;
  createdAt: string;
}

// In-memory array untuk simulasi database sementara
let tasksStore: Task[] = [
  { id: "1", text: "Belajar konsep deployment web", createdAt: new Date().toISOString() },
  { id: "2", text: "Deploy frontend statis ke Netlify", createdAt: new Date().toISOString() },
  { id: "3", text: "Membuat serverless backend TypeScript", createdAt: new Date().toISOString() }
];

export default async (req: Request, context: Context) => {
  const method = req.method;
  const url = new URL(req.url);

  // Default Headers untuk JSON dan CORS
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS"
  };

  // Preflight Request untuk CORS
  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  // GET /api/tasks -> Ambil semua daftar tugas
  if (method === "GET") {
    return new Response(JSON.stringify(tasksStore), { status: 200, headers });
  }

  // POST /api/tasks -> Tambah tugas baru
  if (method === "POST") {
    try {
      const body = await req.json();
      if (!body.text || typeof body.text !== "string") {
        return new Response(JSON.stringify({ error: "Teks tugas wajib diisi" }), { status: 400, headers });
      }

      const newTask: Task = {
        id: Date.now().toString(),
        text: body.text.trim(),
        createdAt: new Date().toISOString()
      };

      tasksStore.push(newTask);
      return new Response(JSON.stringify(newTask), { status: 201, headers });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Format JSON tidak valid" }), { status: 400, headers });
    }
  }

  // DELETE /api/tasks?id=123 -> Hapus tugas
  if (method === "DELETE") {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "ID tugas diperlukan" }), { status: 400, headers });
    }

    tasksStore = tasksStore.filter(t => t.id !== id);
    return new Response(JSON.stringify({ message: "Tugas berhasil dihapus", id }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: "Metode HTTP tidak didukung" }), { status: 405, headers });
};
