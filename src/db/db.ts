import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.DB_URI || "");
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
