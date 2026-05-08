import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

// ── Security headers ────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  next();
});

// ── CORS ─────────────────────────────────────────────────────────────────────
// Set FRONTEND_URLS in Render's environment variables as a comma-separated list
// of every domain that should be allowed to call this API, e.g.:
//   https://luxury-hair-co.pages.dev,https://luxuryhairco.netlify.app
const extraOrigins = (process.env.FRONTEND_URLS ?? process.env.FRONTEND_URL ?? "")
  .split(",")
  .map((u) => u.trim())
  .filter(Boolean);

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  ...extraOrigins,
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (server-to-server, curl, Render health checks)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error(`CORS: origin '${origin}' not allowed`));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "32kb" }));

// ── Simple in-memory rate limiter ─────────────────────────────────────────────
const requestLog = new Map();

const rateLimit = (maxPerMinute) => (req, res, next) => {
  const key = req.ip ?? "unknown";
  const now = Date.now();
  const windowStart = now - 60_000;

  const timestamps = (requestLog.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= maxPerMinute) {
    return res.status(429).json({
      message: "Too many requests. Please try again in a minute.",
    });
  }

  timestamps.push(now);
  requestLog.set(key, timestamps);
  next();
};

// Sweep stale entries every 5 minutes so the Map doesn't grow forever
setInterval(() => {
  const cutoff = Date.now() - 60_000;
  for (const [key, times] of requestLog) {
    const fresh = times.filter((t) => t > cutoff);
    if (fresh.length === 0) requestLog.delete(key);
    else requestLog.set(key, fresh);
  }
}, 5 * 60_000);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/leads", rateLimit(5), leadRoutes);
app.use("/api/orders", rateLimit(10), orderRoutes);
app.use("/api/products", productRoutes);

// ── Health check (Render polls this) ─────────────────────────────────────────
app.get("/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({
    status: "ok",
    db: states[mongoose.connection.readyState] ?? "unknown",
    uptime: Math.floor(process.uptime()),
    env: process.env.NODE_ENV ?? "development",
  });
});

// ── Root ──────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ name: "Luxury Hair Co. API", version: "1.0.0", status: "running" });
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ── Global error handler ──────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack ?? err.message);

  if (err.message?.startsWith("CORS")) {
    return res.status(403).json({ message: err.message });
  }

  res.status(500).json({ message: "Internal server error" });
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

// Graceful shutdown — Render sends SIGTERM before stopping a process
const shutdown = (signal) => {
  console.log(`${signal} received — shutting down`);
  server.close(() => {
    mongoose.connection.close(false).then(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
