import bcrypt from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      firstname,
      lastname,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "สร้างผู้ใช้งานใหม่สำเร็จ" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "อีเมลไม่ถูกต้อง" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "รหัสผ่านไม่ถูกต้อง" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      userId: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ error: false, users });
  } catch (err) {
    res.json({
      error: true,
      message: "Failed to fetch users",
      details: err.message,
    });
  }
});

export default router;
