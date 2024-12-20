const memberService = require("../services/memberService");

exports.getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();
    res.json({ route: "members", status: "success", memberData: members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMember = async (req, res) => {
  try {
    const member = await memberService.createMember(req.body);
    res.json({ route: "members", status: "success", memberData: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await memberService.getMemberById(req.params.id);
    res.json({ route: "members", status: "success", memberData: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await memberService.updateMember(req.params.id, req.body);
    res.json({ route: "members", status: "success", memberData: member });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Changed err to error
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member = await memberService.deleteMember(req.params.id);
    res.json({ route: "members", status: "success", memberData: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
