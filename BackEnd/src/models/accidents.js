const mongoose = require("mongoose");

const accidentSchema = mongoose.Schema({
  rutOwner: {
    type: String,
    required: true,
  },
  policyNumber: {
    type: String,
    required: true,
  },
  liquidator_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  workshop_assign: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Accidents", accidentSchema);
