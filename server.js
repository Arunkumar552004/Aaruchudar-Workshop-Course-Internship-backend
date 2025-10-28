import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import registerRoutes from "./routes/registerRoutes.js";
import applyRoutes from "./routes/applyRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Log every request (for debugging)
app.use((req, res, next) => {
  console.log(`📩 ${req.method} ${req.url}`);
  next();
});

// ✅ Routes
app.use("/api/register", registerRoutes);
app.use("/api/apply", applyRoutes);
app.use("/api/enroll", enrollRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Aaruchudar Workshop | Course | Internship Backend is running successfully!");
});

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
