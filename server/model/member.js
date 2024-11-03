const mongoose = require("mongoose");
const schema = mongoose.Schema;

const memberSchema = new schema({
  name: {
    type: String,
  },
  birthday: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  registeredDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  accessCard: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("members", memberSchema);
