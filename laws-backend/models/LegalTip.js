const mongoose = require("mongoose");

const legalTipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    emergencyHelpline: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LegalTip", legalTipSchema);
