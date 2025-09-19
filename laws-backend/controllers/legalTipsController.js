const LegalTip = require("../models/LegalTip");

exports.getLegalTips = async (req, res) => {
  try {
    const tips = await LegalTip.find().sort({ createdAt: -1 });
    res.json(tips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch legal tips" });
  }
};

exports.addLegalTip = async (req, res) => {
  try {
    const { title, category, description, emergencyHelpline } = req.body;
    const newTip = new LegalTip({ title, category, description, emergencyHelpline });
    await newTip.save();
    res.json(newTip);
  } catch (err) {
    res.status(500).json({ error: "Failed to add tip" });
  }
};

exports.updateLegalTip = async (req, res) => {
  try {
    const updated = await LegalTip.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        emergencyHelpline: req.body.emergencyHelpline,
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update tip" });
  }
};

exports.deleteLegalTip = async (req, res) => {
  try {
    await LegalTip.findByIdAndDelete(req.params.id);
    res.json({ message: "Tip deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete tip" });
  }
};
