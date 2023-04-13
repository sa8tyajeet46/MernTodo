const express = require("express");
const userRouter = require("./Router/userRouter");
const bodyParser = require("body-parser");
const { connectPassport } = require("./connectPassport");
const passport = require("passport");
const app = express();
const session = require("express-session");
const cors = require("cors");
const todoRouter = require("./Router/todoRouter");
const path = require("path");

require("dotenv").config({ path: "./config/config.env" });

connectPassport(passport);
app.use(cors());

app.use(
  session({
    secret: process.env.ss,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded(true));
app.use(express.json());

app.use("/bk/user", userRouter);
app.use("/bk/todo/", todoRouter);
app.use(express.static(path.resolve(__dirname, "frontend", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
module.exports = app;
