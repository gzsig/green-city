const mongoose = require("../db");

const PrizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

exports.PrizeModel = mongoose.model("Prize", PrizeSchema);
