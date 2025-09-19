const mongoose = require("mongoose");

const rightSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String },
    steps: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Right", rightSchema);
