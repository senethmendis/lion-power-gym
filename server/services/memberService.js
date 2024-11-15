const memberModel = require("../model/member");

// Get all members
exports.getAllMembers = async () => {
  return await memberModel.find();
};

// Create a new member
exports.createMember = async (member) => {
  return await memberModel.create(member);
};

// Get one member by ID
exports.getMemberById = async (id) => {
  return await memberModel.findById(id);
};

// Update a member by ID
exports.updateMember = async (id, member) => {
  return await memberModel.findByIdAndUpdate(id, member, { new: true });
};

// Delete a member by ID
exports.deleteMember = async (id) => {
  return await memberModel.findByIdAndDelete(id);
};
