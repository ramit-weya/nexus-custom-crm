import mongoose from "mongoose";

const crmEventSchema = new mongoose.Schema(
  {
    payload: { type: mongoose.Schema.Types.Mixed, required: true },
    source: { type: String, default: null },
    receivedAt: { type: Date, default: Date.now },
  },
  { collection: "crm_events", versionKey: false },
);

export const CrmEvent = mongoose.model("CrmEvent", crmEventSchema);
