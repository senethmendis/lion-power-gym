const adminService = require("../services/adminService");

exports.getAdminById = async (req, res) => {
  try {
    const admin = await adminService.getAdminById(req.params.id);
    res.json({ route: "admin", status: "success", data: admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const admin = await adminService.updateAdmin(req.params.id, req.body);
    res.json({ route: "admin", status: "success", data: admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
