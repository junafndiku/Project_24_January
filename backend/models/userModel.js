const mongoose = require("mongoose");
const userS = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "admin" },
});
const User = mongoose.model("User", userS);
module.exports = User;