import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async (): Promise<void> => {
  try {
  const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error
  }
};

export default dbConnect;
