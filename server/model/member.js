const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Validates for a 10-digit number
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  accessCard: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Member", memberSchema);
