const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

// uer local .evn file
const port = process.env.BACKEND_PORT || 8000;

// get main rotes
const members = require("./routes/members");
const admin = require("./routes/admin");

// user main routes
app.use("/members", members);
app.use("/admin", admin);

//db conncet
const db = require("./db");

//test route
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running port ${port}!`);
});
