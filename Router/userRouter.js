const express = require("express");
const {
  register,
  login,
  logout,
  profile,
} = require("../controller/userController");

const passport = require("passport");
const { isloggedin } = require("../middleware/isloggedin");

const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/login").post(passport.authenticate("local"), login);
userRouter.route("/logout").post(isloggedin, logout);
userRouter.route("/profile").get(profile);
module.exports = userRouter;
