const mongoose = require("mongoose");

const permitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  estimatedCostINR: { type: Number, required: true },
  validityYears: { type: Number, required: true },
  whereToApply: { type: String, required: true },
});

const businessSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },       
    description: { type: String, required: true }, 
    image: { type: String },                       
    permits: [permitSchema],                       
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
