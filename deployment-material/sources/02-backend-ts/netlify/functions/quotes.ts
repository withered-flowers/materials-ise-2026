import type { Context } from "@netlify/functions";

interface Quote {
  id: number;
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { id: 1, text: "Coding is not about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { id: 2, text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { id: 3, text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { id: 4, text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" }
];

export default async (req: Request, context: Context) => {
  // Hanya izinkan metode GET
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Pilih quote acak
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return new Response(JSON.stringify(randomQuote), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
