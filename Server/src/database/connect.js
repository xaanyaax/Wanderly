import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(url);
    console.log("✅ Connected to MongoDB! Your database is connected.");
  } catch (err) {
    console.error("❌ Failed to connect with MongoDB.");
    throw err; 
  }
};

export default connectDB;

