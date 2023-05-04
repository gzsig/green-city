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
    required: true,
  },
  longitude: {
    type: String,
    default: null,
  },
  latitude: {
    type: String,
    default: null,
  },
});

exports.UserModel = mongoose.model("User", UserSchema);
