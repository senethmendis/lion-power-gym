const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
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
  password: {
    type: String,
    required: true,
  },
  passwordRecheck: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admin", adminSchema);
