const express = require("express");
const router = express.Router();
const {
  createMember,
  deleteMember,
  getAllMembers,
  getMemberById,
  updateMembers,
} = require("../controllers/memberController");

// all the routes needed for  the member

router.get("/", getAllMembers);
router.post("/", createMember);
router.get("/:id", getMemberById);
router.put("/:id", updateMembers);
router.delete("/:id", deleteMember);

module.exports = router;
