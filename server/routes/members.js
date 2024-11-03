const express = require("express");
const router = express.Router();
const member = require("../model/member");

router.get("/test", (req, res) => {
  res.send("Hello Members");
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
