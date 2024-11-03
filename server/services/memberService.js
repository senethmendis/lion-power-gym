const memberModel = require("../model/member");

//get all the members
exports.getAllMembers = async () => {
  return await memberModel.find();
};

//create a new  member
exports.createMember = async (member) => {
  return await memberModel.create(member);
};

// get one member  by id
exports.getMemberById = async (id) => {
  return await memberModel.findById(id);
};

//update a member by there id
exports.updateMember = async (id, member) => {
  return await memberModel.findByIdAndUpdate(id, member);
};

//delete a member by there id
exports.deleteMember = async (id) => {
  return await memberModel.findByIdAndDelete(id);
};
