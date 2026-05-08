import mongoose from "mongoose";

mongoose.connection.on("connected", () =>
  console.log(`MongoDB connected: ${mongoose.connection.host}`)
);

mongoose.connection.on("error", (err) =>
  console.error("MongoDB error:", err.message)
);

mongoose.connection.on("disconnected", () =>
  console.warn("MongoDB disconnected")
);

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI is not set — skipping MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5_000,
      socketTimeoutMS: 45_000,
      maxPoolSize: 10,
    });
  } catch (error) {
    console.error("MongoDB initial connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
