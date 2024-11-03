const adminModel = require("../model/admin");

//get one admin by there id
exports.getAdminById = async (id) => {
  return await adminModel.findById(id);
};

//update  admin by id
exports.updateAdmin = async (id, admin) => {
  return await adminModel.findByIdAndUpdate(id, admin);
};
