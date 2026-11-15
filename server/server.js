import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Middleware: Usuwanie nagłówków blokujących iframe i ustawianie CSP
app.use((req, res, next) => {
  // To jest krytyczne dla Discorda: musimy pozwolić na renderowanie w iframe
  res.removeHeader("X-Frame-Options");
  
  // Zezwól Discordowi na osadzenie aplikacji
  res.setHeader("Content-Security-Policy", "frame-ancestors * https://*.discord.com https://discord.com");
  
  // Standardowe nagłówki CORS
  // Same-origin API; do not allow arbitrary websites to read responses.
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  
  next();
});

app.use(express.json({ limit: "16kb" }));

// Endpoint do wymiany kodu autoryzacji na token (OAuth2)
app.post("/api/token", async (req, res) => {
  try {
    if (typeof req.body?.code !== "string" || req.body.code.length < 1 || req.body.code.length > 2048) {
      return res.status(400).json({ error: "Invalid authorization code" });
    }
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.VITE_DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: req.body.code,
        redirect_uri: process.env.VITE_REDIRECT_URI,
      }),
    });
    
    const data = await response.json();
    if (!response.ok || typeof data.access_token !== "string") {
      return res.status(401).json({ error: "Discord authentication failed" });
    }
    res.setHeader("Cache-Control", "no-store");
    res.json({ access_token: data.access_token });
  } catch (error) {
    console.error("Token exchange error:", error);
    res.status(500).json({ error: "Failed to exchange token" });
  }
});

// Endpoint do weryfikacji hasła (np. do ochrony VNC)
// Password checks are performed by the VNC protocol, not a public API endpoint.

// Uruchomienie serwera na porcie 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend serwer działa na porcie ${PORT}`);
});