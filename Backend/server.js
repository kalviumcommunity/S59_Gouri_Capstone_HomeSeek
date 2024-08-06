const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const propertyRouter = require("./routes/property.route");
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors())
app.use('/',propertyRouter)
const port = 8080;

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("📦 connected to mongoDB");
  } catch (err) {
    console.error("Error connecting to mongoDB:", err.message);
  }
};
connectToDB();
app.listen(port, () => {
  console.log(`server is running ${port}`);
});

app.get("/", async (req, res) => {
  res.send("Connected Successfully! 😊");
});

