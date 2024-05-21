require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("📦 connected to mongoDB");
  } catch (err) {
    console.error("Error connecting to mongoDB:", err);
  }
};

module.exports = connectToDB;
