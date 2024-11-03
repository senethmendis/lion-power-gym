const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("Db is connected successfully!");
  })
  .catch(console.error);

module.exports = db;
