import mongoose from "mongoose";

export async function connectDb(uri) {
  await mongoose.connect(uri);
  console.log(`[db] connected to ${mongoose.connection.name}`);
}
