const mongoose = require("mongoose");
const schema = mongoose.Schema;

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  birthday: {
    type: String,
  },
  age: Number,
  registeredDate: Date,
});

module.exports = mongoose.model("Members", memberSchema);
