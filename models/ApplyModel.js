import mongoose from "mongoose";

const applySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  internship: { type: String, required: true },
  resume: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Apply", applySchema);
