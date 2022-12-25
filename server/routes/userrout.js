const express = require("express");
const userRouter = express.Router();
const Users = require("../models/UserModel.js");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const token = require("../jwt");