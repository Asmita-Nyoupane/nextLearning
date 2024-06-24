import mongoose, { connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connect = async () => {
  try {
    // const mongoUri = process.env.NEXT_MONGO_URI;
    const mongoUri = process.env.NEXT_MONGO_URL;

    if (!mongoUri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables"
      );
    }

    // Connect to MongoDB
    await mongoose.connect(mongoUri!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDb connection error. Please make  sure MongoDB is running",
        +err
      );
    });
  } catch (error) {
    console.log("🚀 ~ connect ~ error:", error);
  }
};
