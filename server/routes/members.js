const express = require("express");
const router = express.Router();
const {
	createMember,
	deleteMember,
	getAllMembers,
	getMemberById,
	updateMember, // Changed to singular for consistency
} = require("../controllers/memberController");

// All routes for the member resource
router.get("/", getAllMembers);
router.post("/", createMember);
router.get("/:id", getMemberById);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

module.exports = router;
