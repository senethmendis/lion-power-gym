const statusCardModel = require("../model/statusCard");
const memberModel = require("../model/member");

exports.getCardStatus = async () => {
  return await statusCardModel.find();
};

exports.getMemberCount = async () => {
  return await memberModel.count();
};
