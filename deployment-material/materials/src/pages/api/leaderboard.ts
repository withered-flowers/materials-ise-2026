import type { APIRoute } from 'astro';
import { getLeaderboard, addLeaderboardEntry, getTursoConfig } from '../../lib/turso';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const limitParam = url.searchParams.get('limit');
  const limit = limitParam ? Math.min(100, Math.max(1, parseInt(limitParam, 10) || 50)) : 50;

  const { isConfigured } = getTursoConfig();
  if (!isConfigured) {
    return new Response(
      JSON.stringify({
        success: true,
        isConfigured: false,
        message: 'Database Turso belum dikonfigurasi. Silakan isi TURSO_DATABASE_URL dan TURSO_AUTH_TOKEN di .env',
        data: [],
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  }

  const { entries, error } = await getLeaderboard(limit);

  return new Response(
    JSON.stringify({
      success: !error,
      isConfigured: true,
      data: entries,
      error: error || undefined,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const { isConfigured } = getTursoConfig();
  if (!isConfigured) {
    return new Response(
      JSON.stringify({
        success: false,
        isConfigured: false,
        error: 'Database Turso belum dikonfigurasi di server. Silakan hubungi instruktur/admin untuk mengatur kredensial.',
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, error: 'Format data request tidak valid (wajib JSON).' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { name, email, score, correctCount, timeSpentSeconds, timeSpentFormatted, accuracy } = body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return new Response(
      JSON.stringify({ success: false, error: 'Nama peserta wajib diisi.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (typeof score !== 'number' || score < 0 || score > 100) {
    return new Response(
      JSON.stringify({ success: false, error: 'Nilai skor tidak valid.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const result = await addLeaderboardEntry({
    name: name.trim(),
    email: email ? String(email).trim() : undefined,
    score: Number(score),
    correct_count: Number(correctCount || 0),
    total_questions: 20,
    time_spent_seconds: Number(timeSpentSeconds || 0),
    time_spent_formatted: String(timeSpentFormatted || '00:00'),
    accuracy: Number(accuracy || 0),
  });

  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, error: result.error || 'Gagal menyimpan skor ke database.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Skor berhasil disimpan ke papan peringkat!',
      id: result.id,
      rank: result.rank,
    }),
    {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
