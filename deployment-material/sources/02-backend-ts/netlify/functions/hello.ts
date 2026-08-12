import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "Developer Junior";

  return new Response(
    JSON.stringify({
      message: `Halo ${name}, selamat datang di Backend Netlify Functions TypeScript!`,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      customSecret: process.env.MY_SECRET_KEY || "Secret belum diset di Environment Variables"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};
