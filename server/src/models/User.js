const mongoose = require("../db");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  longitude: {
    type: Number,
    default: null,
  },
  latitude: {
    type: Number,
    default: null,
  },
});

exports.UserModel = mongoose.model("User", UserSchema);
