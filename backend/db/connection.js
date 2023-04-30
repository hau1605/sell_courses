import mongoose from "mongoose";
import { CONNECTION_STRING, DB_OPTIONS } from "../config/config.js";

// Connect to MongoDB Atlas
export const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING, DB_OPTIONS);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);

    process.exit(1);
  }
};
