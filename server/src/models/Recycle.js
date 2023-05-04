const mongoose = require("../db");

const RecycleSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  points: {
    type: Number,
    default: 0,
  },
  weight: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

exports.RecycleModel = mongoose.model("Recycle", RecycleSchema);
