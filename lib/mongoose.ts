import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not defined");
  }
  if (isConnected) {
    console.log("=> using existing database connection");
  }

  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
