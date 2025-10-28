import express from "express";
import Register from "../models/RegisterModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newRegister = new Register(req.body);
    await newRegister.save();
    res.status(201).json({ success: true, message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
