const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routes/taskroutes');
const connectDB = require('./config/dbconnect')
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());




app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
