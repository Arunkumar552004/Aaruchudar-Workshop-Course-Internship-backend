import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import Register from "./models/RegisterModel.js";
import Apply from "./models/ApplyModel.js";
import Enroll from "./models/EnrollModel.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 💾 Register Form
app.post("/api/register", async (req, res) => {
  try {
    const newUser = new Register(req.body);
    await newUser.save();
    res.status(201).json({ success: true, message: "Registration Successful!" });
  } catch (err) {
    console.error("❌ Register Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 💼 Apply Form
app.post("/api/apply", async (req, res) => {
  try {
    const newApply = new Apply(req.body);
    await newApply.save();
    res.status(201).json({ success: true, message: "Application Submitted!" });
  } catch (err) {
    console.error("❌ Apply Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 📘 Enroll Form
app.post("/api/enroll", async (req, res) => {
  try {
    const newEnroll = new Enroll(req.body);
    await newEnroll.save();
    res.status(201).json({ success: true, message: "Enrollment Completed!" });
  } catch (err) {
    console.error("❌ Enroll Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Root Route (Fix for Render "Cannot GET /")
app.get("/", (req, res) => {
  res.send("✅ Aaruchudar Workshop | Course | Internship Backend is running successfully!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("🌐 Your Render service is live 🎉");
});
