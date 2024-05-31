const express = require('express');
const connectToDB = require('./db')

const app = express();
const port = 8080;
connectToDB()
app.listen(port,()=>console.log(`${port}`))