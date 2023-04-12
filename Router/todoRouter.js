const express = require("express");
const {
  createTodo,
  marktodo,
  unmarktodo,
  showTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");
const { isloggedin } = require("../middleware/isloggedin");
const todoRouter = express.Router();

todoRouter.route("/new").post(isloggedin, createTodo);
todoRouter.route("/mark/:id").get(isloggedin, marktodo);
todoRouter.route("/unmark/:id").get(isloggedin, unmarktodo);
todoRouter.route("/show").get(isloggedin, showTodo);
todoRouter.route("/del/:id").delete(isloggedin, deleteTodo);

todoRouter.route("/update/:id").post(isloggedin, updateTodo);
module.exports = todoRouter;
