const Law = require("../models/Law");

const getLaws = async (req, res) => {
  try {
    const laws = await Law.find();
    res.json(laws);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addLaw = async (req, res) => {
  try {
    const law = new Law(req.body);
    await law.save();
    res.status(201).json(law);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateLaw = async (req, res) => {
  try {
    const updated = await Law.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteLaw = async (req, res) => {
  try {
    await Law.findByIdAndDelete(req.params.id);
    res.json({ message: "Law deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getLaws, addLaw, updateLaw, deleteLaw };
