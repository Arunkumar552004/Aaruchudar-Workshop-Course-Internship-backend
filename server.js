import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import registerRoutes from "./routes/registerRoutes.js";
import applyRoutes from "./routes/applyRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Basic test route (to verify backend is working)
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Aaruchudar Backend Working ✅" });
});

// ✅ Route mounting
app.use("/api/register", registerRoutes);
app.use("/api/apply", applyRoutes);
app.use("/api/enroll", enrollRoutes);

// ✅ Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Aaruchudar Workshop | Course | Internship Backend is running on port ${PORT}`);
});
