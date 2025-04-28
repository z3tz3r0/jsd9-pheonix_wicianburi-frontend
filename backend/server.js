import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './router/auth.js';


dotenv.config();

const app = express();


// Middleware
app.use(cors()); // อย่าลืมมาแก้ cors ตอน deploy
app.use(express.json())
app.use('/api/auth', authRoutes);


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

