import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://whsujomoraoaqcfevobc.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { access_token } = req.body;
    if (!access_token) return res.status(400).json({ error: "Missing access_token" });

    // Verify token + get user info from Google
    const googleRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!googleRes.ok) return res.status(401).json({ error: "Invalid Google access token" });

    const { email, name, picture } = await googleRes.json();
    if (!email) return res.status(400).json({ error: "Could not retrieve email from Google" });

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Find or create user
    const { data: { users } } = await supabase.auth.admin.listUsers();
    const existing = users.find((u) => u.email === email);

    if (!existing) {
      const { error: createError } = await supabase.auth.admin.createUser({
        email,
        email_confirm: true,
        user_metadata: { full_name: name, avatar_url: picture },
      });
      if (createError) throw createError;
    }

    // Generate OTP for the client to exchange for a session
    const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
      type: "magiclink",
      email,
    });
    if (linkError) throw linkError;

    return res.status(200).json({ email, token: linkData.properties.email_otp });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
