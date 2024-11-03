const express = require("express");
const router = express.Router();
const { getAdminById, updateAdmin } = require("../controllers/adminController");

// all the  routes for admin will be defined here

router.get("/:id", getAdminById);
router.get("/:id", updateAdmin);

module.exports = router;
