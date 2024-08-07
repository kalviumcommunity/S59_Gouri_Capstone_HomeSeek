const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const propertyRouter = require("./routes/property.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', propertyRouter);

const port = 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("📦 connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectToDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", async (req, res) => {
  res.send("Connected Successfully! 😊");
});
