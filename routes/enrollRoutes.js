import express from "express";
import Enroll from "../models/EnrollModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newEnroll = new Enroll(req.body);
    await newEnroll.save();
    res.status(201).json({ success: true, message: "Enrolled successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
