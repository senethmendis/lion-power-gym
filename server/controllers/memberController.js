const memberService = require("../services/memberService");

exports.getAllMembers = async (req, res) => {
  try {
    const member = await memberService.getAllMembers();
    res.json({ route: "members", status: "success", data: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMember = async (req, res) => {
  try {
    const member = await memberService.createMember(req.body);
    res.json({ route: "members", status: "success", data: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await memberService.getMemberById(req.params.id);
    res.json({ route: "members", status: "success", data: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMembers = async (req, res) => {
  try {
    const member = await memberService.updateMember(req.params.id, req.body);
    res.json({ route: "members", status: "success", data: member });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member = await memberService.deleteMember(req.params.id);
    res.json({ route: "members", status: "success", data: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
