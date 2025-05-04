import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./router/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend origin
    credentials: true,
  })
); // อย่าลืมมาแก้ cors ตอน deploy
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// TODO : Kob working on this
// TODO : required other models to be done to see what schema look like.
import adminRoutes from "./routes/adminRoutes.js";
app.use("/admin", adminRoutes);

(async () => {
  // Connect to MongoDB via Mongoose
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo database");
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
})();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
