const express = require("express");
const userRouter = express.Router();
const Users = require("../models/UserModel.js");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const token = require("../jwt");
const validation = [
    
]

userRouter.post("/api/register", validation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ error: errors });
    }
    const { username, surname, patronymic, email, password } = req.body;
    bcrypt.hash(password, 10).then(async (hash) => {
      var user = new Users.User({
        username: username,
        surname: surname,
        patronymic: patronymic,
        email: email,
        password: hash,
        role: "user",
      });
      await user
        .save()
        .then(() => {
          res.json({ isRegister: true });
        })
        .catch((err) => {
          if (err) {
            res.status(400).json({ error: err });
          }
        });
    });
  });
  
  userRouter.post("/api/login", validation, async (req, res) => {
    const { userlog, password } = req.body;
    var user = await Users.User.findOne({
      $or: [{ email: userlog }],
    });
  
    if (user) {
      const hashPassword = user.password;
      bcrypt.compare(password, hashPassword).then(async (match) => {
        if (!match) {
          return res.status(400).json({ error: "Incorrect password!" });
        } else {
          const accessToken = token.createToken(user);
          res.cookie("access-token", accessToken, {
            maxAge: 60 * 60 * 24 * 30 * 1000,
          });
          return res.json({ isLogin: true, role: user.role });
        }
      });
    } else {
      return res.status(400).json({ error: "User doesn't exist" });
    }
  });
  
  module.exports = userRouter;