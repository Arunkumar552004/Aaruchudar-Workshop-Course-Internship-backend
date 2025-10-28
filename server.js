import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import registerRoutes from "./routes/registerRoutes.js";
import applyRoutes from "./routes/applyRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ API Routes
app.use("/api/register", registerRoutes);
app.use("/api/apply", applyRoutes);
app.use("/api/enroll", enrollRoutes);

// ✅ Root route for Render check
app.get("/", (req, res) => {
  res.send("✅ Aaruchudar Workshop | Course | Internship Backend is running successfully!");
});

// ✅ Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
