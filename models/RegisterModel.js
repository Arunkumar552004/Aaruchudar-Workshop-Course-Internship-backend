import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Register", registerSchema);
