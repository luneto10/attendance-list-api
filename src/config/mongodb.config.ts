import mongoose from "mongoose";
import dotenv from "dotenv";
import { IDatabaseConnector } from "../interfaces/IDatabaseConnector";

  dotenv.config();

  export class MongoDBConnector implements IDatabaseConnector {
    async connect(): Promise<void> {
      try {
        await mongoose.connect(process.env.MONGODB_URI!, {
          dbName: process.env.DB_NAME || "test",
        });
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
      }
    }

    async disconnect(): Promise<void> {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }
  }