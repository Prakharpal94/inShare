require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_CONNECTION_URI}`, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
