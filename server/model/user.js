const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScheme = new Schema({
  id: Number,
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
});

const User = mongoose.model("users", UserScheme);

module.exports = {
  User
};