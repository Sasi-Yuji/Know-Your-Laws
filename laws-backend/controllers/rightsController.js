const Right = require("../models/Right");

exports.getRights = async (req, res) => {
  try {
    const rights = await Right.find().sort({ createdAt: -1 });
    res.json(rights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRightById = async (req, res) => {
  try {
    const right = await Right.findById(req.params.id);
    if (!right) return res.status(404).json({ message: "Right not found" });
    res.json(right);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRight = async (req, res) => {
  try {
    const { title, description, tag, steps } = req.body;

    const newRight = new Right({
      title,
      description,
      tag,
      steps,
    });

    const savedRight = await newRight.save();
    res.status(201).json(savedRight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRight = async (req, res) => {
  try {
    const { title, description, tag, steps } = req.body;

    const updatedRight = await Right.findByIdAndUpdate(
      req.params.id,
      { title, description, tag, steps },
      { new: true, runValidators: true }
    );

    if (!updatedRight) return res.status(404).json({ message: "Right not found" });

    res.json(updatedRight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteRight = async (req, res) => {
  try {
    const right = await Right.findByIdAndDelete(req.params.id);
    if (!right) return res.status(404).json({ message: "Right not found" });
    res.json({ message: "Right deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
