const mongoose = require("mongoose");

const lawSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model("Law", lawSchema);
