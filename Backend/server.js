const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
const port = 8080;

const MONGODB_URI = process.env.MONGODB_URI;


const connectToDB = async () => {
    try {
     await mongoose.connect(MONGODB_URI)
      console.log('📦 connected to mongoDB');
    } catch (err) {
      console.error('Error connecting to mongoDB:', err.message);
    }
  };
  connectToDB()
app.listen(port,()=>console.log(`Server running on the port${port}`))