const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

// uer local .evn file
const port = process.env.BACKEND_PORT;

// get main rotes
const members = require("./routes/members");

// user main routes
app.use("/members", members);

//test route
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server is running port" + port);
});
