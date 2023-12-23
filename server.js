const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/taskroutes");
const connectDB = require("./config/dbconnect");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ["https://codedata-frontend.onrender.com","http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Enable credentials
};

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api working fine");
});

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
