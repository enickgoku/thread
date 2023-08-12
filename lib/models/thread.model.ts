import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  id: { type: String, required: true },
  threadId: { type: String, required: true, unique: true },
});

export const Thread =
  mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
