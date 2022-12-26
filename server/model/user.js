

const { Schema, model } = require("mongoose");

const UserScheme = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
});




module.exports = model('User', UserScheme);