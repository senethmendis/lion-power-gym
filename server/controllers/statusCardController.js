const cardStatusService = require("../services/cardStatusService");

exports.getCardStatus = async (req, res) => {
  try {
    const cardStatus = await cardStatusService.getCardStatus();
    res.json({ route: "members", status: "success", cardStats: cardStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMemberCount = async (req, res) => {
  try {
    const cardStatus = await cardStatusService.getCardStatus();
    res.json({ route: "members", status: "success", cardStats: cardStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
