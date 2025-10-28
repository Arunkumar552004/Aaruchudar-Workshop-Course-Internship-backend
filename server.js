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

// ✅ CORS Setup
app.use(
  cors({
    origin: [
      "https://aaruchudar-workshop-course-internship-dopa.onrender.com",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
  })
);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/register", registerRoutes);
app.use("/api/apply", applyRoutes);
app.use("/api/enroll", enrollRoutes);

// ✅ Root route (for testing)
app.get("/", (req, res) => {
  res.send("✅ Aaruchudar Workshop | Course | Internship Backend is running successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
