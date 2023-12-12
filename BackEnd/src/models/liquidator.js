const mongoose = require("mongoose");

const liquidatorSchema = mongoose.Schema({
  accident: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
    required: true,
  },
  tow: {
    type: String,
    required: true,
  },
  workshop: {
    type: String,
    required: true,
  },
  repair: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  deliver: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Liquidator", liquidatorSchema);