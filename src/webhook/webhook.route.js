import { Router } from "express";
import { receiveWebhook } from "./webhook.controller.js";

const router = Router();

router.post("/webhook", receiveWebhook);

export default router;
