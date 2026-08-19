import { createClient, type Client } from '@libsql/client';

export interface LeaderboardEntry {
  id?: number;
  name: string;
  email?: string;
  score: number;
  correct_count: number;
  total_questions: number;
  time_spent_seconds: number;
  time_spent_formatted: string;
  accuracy: number;
  created_at?: string;
  rank?: number;
}

let dbClient: Client | null = null;
let isTableInitialized = false;

function cleanEnvVal(val: string | undefined): string | undefined {
  if (!val) return undefined;
  const trimmed = val.trim().replace(/^["']|["']$/g, '');
  if (!trimmed || trimmed === 'your-database-name.turso.io' || trimmed === 'your-turso-auth-token') {
    return undefined;
  }
  return trimmed;
}

export function getTursoConfig(): { url: string | undefined; authToken: string | undefined; isConfigured: boolean } {
  const rawUrl =
    (typeof process !== 'undefined' && process.env.TURSO_DATABASE_URL) ||
    import.meta.env.TURSO_DATABASE_URL ||
    undefined;

  const rawAuthToken =
    (typeof process !== 'undefined' && process.env.TURSO_AUTH_TOKEN) ||
    import.meta.env.TURSO_AUTH_TOKEN ||
    undefined;

  const url = cleanEnvVal(rawUrl);
  const authToken = cleanEnvVal(rawAuthToken);

  const isConfigured = Boolean(url && authToken);
  return { url, authToken, isConfigured };
}

export function getTursoClient(): Client | null {
  const { url, authToken, isConfigured } = getTursoConfig();
  if (!isConfigured || !url || !authToken) {
    return null;
  }

  // Ensure url has valid protocol
  let normalizedUrl = url;
  if (!normalizedUrl.startsWith('libsql://') && !normalizedUrl.startsWith('https://') && !normalizedUrl.startsWith('http://')) {
    normalizedUrl = `libsql://${normalizedUrl}`;
  }

  if (!dbClient) {
    try {
      dbClient = createClient({
        url: normalizedUrl,
        authToken,
      });
    } catch (e) {
      console.error('Error creating Turso client:', e);
      return null;
    }
  }

  return dbClient;
}

export async function ensureLeaderboardTable(): Promise<{ ready: boolean; error?: string }> {
  if (isTableInitialized) return { ready: true };

  const db = getTursoClient();
  if (!db) return { ready: false, error: 'Kredensial database Turso belum dikonfigurasi.' };

  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS quiz_leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        score INTEGER NOT NULL,
        correct_count INTEGER NOT NULL,
        total_questions INTEGER NOT NULL DEFAULT 20,
        time_spent_seconds INTEGER NOT NULL,
        time_spent_formatted TEXT,
        accuracy INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create index for ranking queries
    await db.execute(`
      CREATE INDEX IF NOT EXISTS idx_leaderboard_score_time 
      ON quiz_leaderboard (score DESC, time_spent_seconds ASC, created_at ASC);
    `);

    isTableInitialized = true;
    return { ready: true };
  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    console.error('Error ensuring leaderboard table in Turso:', errorMsg);

    if (errorMsg.includes('401') || errorMsg.includes('UNAUTHORIZED') || errorMsg.includes('AUTH_ERROR')) {
      return {
        ready: false,
        error: 'Kredensial Turso tidak valid (HTTP 401 Unauthorized). Silakan periksa kembali TURSO_AUTH_TOKEN dan TURSO_DATABASE_URL di file .env Anda.',
      };
    }

    return {
      ready: false,
      error: `Gagal menginisialisasi database Turso: ${errorMsg}`,
    };
  }
}

export async function getLeaderboard(limit = 50): Promise<{ entries: LeaderboardEntry[]; isConfigured: boolean; error?: string }> {
  const db = getTursoClient();
  if (!db) {
    return { entries: [], isConfigured: false };
  }

  const tableCheck = await ensureLeaderboardTable();
  if (!tableCheck.ready) {
    return { entries: [], isConfigured: true, error: tableCheck.error };
  }

  try {
    const result = await db.execute({
      sql: `
        SELECT 
          id,
          name,
          email,
          score,
          correct_count,
          total_questions,
          time_spent_seconds,
          time_spent_formatted,
          accuracy,
          strftime('%d/%m/%Y %H:%M', created_at) as created_at
        FROM quiz_leaderboard
        ORDER BY score DESC, time_spent_seconds ASC, created_at ASC
        LIMIT ?
      `,
      args: [limit],
    });

    const entries: LeaderboardEntry[] = result.rows.map((row, idx) => ({
      id: Number(row.id),
      name: String(row.name),
      email: row.email ? String(row.email) : undefined,
      score: Number(row.score),
      correct_count: Number(row.correct_count),
      total_questions: Number(row.total_questions),
      time_spent_seconds: Number(row.time_spent_seconds),
      time_spent_formatted: String(row.time_spent_formatted || ''),
      accuracy: Number(row.accuracy),
      created_at: String(row.created_at || ''),
      rank: idx + 1,
    }));

    return { entries, isConfigured: true };
  } catch (error: any) {
    console.error('Error fetching leaderboard from Turso:', error);
    return { entries: [], isConfigured: true, error: error?.message };
  }
}

export async function addLeaderboardEntry(entry: LeaderboardEntry): Promise<{ success: boolean; id?: number; rank?: number; error?: string }> {
  const db = getTursoClient();
  if (!db) {
    return {
      success: false,
      error: 'Database Turso belum dikonfigurasi. Silakan tambahkan TURSO_DATABASE_URL dan TURSO_AUTH_TOKEN di .env',
    };
  }

  const tableCheck = await ensureLeaderboardTable();
  if (!tableCheck.ready) {
    return {
      success: false,
      error: tableCheck.error || 'Gagal menghubungkan ke tabel database Turso.',
    };
  }

  try {
    const cleanName = entry.name.trim().slice(0, 50);
    const cleanEmail = entry.email ? entry.email.trim().slice(0, 100) : null;
    const cleanScore = Math.max(0, Math.min(100, Math.round(entry.score)));
    const cleanCorrect = Math.max(0, Math.min(20, Math.round(entry.correct_count)));
    const cleanTotal = 20;
    const cleanTimeSpent = Math.max(0, Math.round(entry.time_spent_seconds));
    const cleanAccuracy = Math.max(0, Math.min(100, Math.round(entry.accuracy)));

    const insertResult = await db.execute({
      sql: `
        INSERT INTO quiz_leaderboard (
          name, email, score, correct_count, total_questions, time_spent_seconds, time_spent_formatted, accuracy
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        cleanName,
        cleanEmail,
        cleanScore,
        cleanCorrect,
        cleanTotal,
        cleanTimeSpent,
        entry.time_spent_formatted,
        cleanAccuracy,
      ],
    });

    const insertedId = Number(insertResult.lastInsertRowid);

    // Calculate user's rank
    const rankResult = await db.execute({
      sql: `
        SELECT COUNT(*) as rank_above 
        FROM quiz_leaderboard 
        WHERE (score > ?) OR (score = ? AND time_spent_seconds < ?) OR (score = ? AND time_spent_seconds = ? AND id < ?)
      `,
      args: [cleanScore, cleanScore, cleanTimeSpent, cleanScore, cleanTimeSpent, insertedId],
    });

    const rank = Number(rankResult.rows[0]?.rank_above || 0) + 1;

    return { success: true, id: insertedId, rank };
  } catch (error: any) {
    console.error('Error inserting leaderboard entry to Turso:', error);
    const errorMsg = error?.message || String(error);
    if (errorMsg.includes('401') || errorMsg.includes('UNAUTHORIZED')) {
      return {
        success: false,
        error: 'Kredensial Turso tidak valid (HTTP 401 Unauthorized). Silakan periksa kembali TURSO_AUTH_TOKEN di .env',
      };
    }
    return { success: false, error: errorMsg || 'Gagal menyimpan skor ke database.' };
  }
}
