const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE_URL)
      .then(console.log("connection success"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
