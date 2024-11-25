const express = require("express");
const router = express.Router();

const { getCardStatus } = require("../controllers/statusCardController");

// all the routes for status card will be defined here

router.get("/", getCardStatus);

module.exports = router;
