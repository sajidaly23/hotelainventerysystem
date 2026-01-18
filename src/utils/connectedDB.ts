import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://raeessajidali10:raees111@cluster0.eqsrxxa.mongodb.net/hotelaapp-inventorysystem");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};