const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//connect to the mongo database
const db = mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("DB is connected successfully!");
  })
  .catch(console.error);

module.exports = db;
