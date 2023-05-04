const mongoose = require("../db");

const RecycleSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

exports.RecycleModel = mongoose.model("Recycle", RecycleSchema);
