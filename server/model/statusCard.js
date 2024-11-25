const mongoose = require("mongoose");
const schema = mongoose.Schema;

const statusCardSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("status", statusCardSchema);
