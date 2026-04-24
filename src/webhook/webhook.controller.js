import { CrmEvent } from "./webhook.model.js";

export async function receiveWebhook(req, res) {
  const body = req.body;

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ status: "error", message: "Request body must be a JSON object" });
  }

  const event = await CrmEvent.create({
    payload: body,
    source: body.source ?? null,
  });

  console.log(`[webhook] saved crm_event id=${event._id}`);
  return res.status(200).json({ status: "ok", id: event._id });
}
