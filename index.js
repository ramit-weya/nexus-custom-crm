import "dotenv/config";
import express from "express";
import { connectDb } from "./src/config/db.js";
import webhookRouter from "./src/webhook/webhook.route.js";

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO;

if (!MONGO) {
  console.error("[startup] MONGO env var is required");
  process.exit(1);
}

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/", webhookRouter);

connectDb(MONGO)
  .then(() => {
    app.listen(PORT, () => console.log(`[server] nexus-custom-crm listening on :${PORT}`));
  })
  .catch((err) => {
    console.error("[startup] DB connection failed", err);
    process.exit(1);
  });
