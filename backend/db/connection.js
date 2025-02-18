const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("mongoDB_url is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection established to DB");
  } catch (err) {
    console.error("Connection not established: ", err);
    process.exit(1);
  }
};

module.exports = connectDB;