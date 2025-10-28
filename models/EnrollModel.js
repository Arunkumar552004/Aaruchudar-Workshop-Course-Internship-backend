import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  workshop: { type: String, required: true },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Enroll", enrollSchema);
