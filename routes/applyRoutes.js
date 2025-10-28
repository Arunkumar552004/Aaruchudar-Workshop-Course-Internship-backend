import express from "express";
import Apply from "../models/ApplyModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newApply = new Apply(req.body);
    await newApply.save();
    res.status(201).json({ success: true, message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
