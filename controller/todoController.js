const Todo = require("./../models/todomodel");

const createTodo = async (req, res, next) => {
  try {
    const { event } = req.body;
    const user = req.user;

    const todo = await Todo.create({ event, createdBy: user.id });

    res.status(200).json({ sucess: true, todo });
  } catch (error) {
    res.status(404).json({ sucess: true, error });
  }
};

const marktodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (req.user.id.toString() !== todo.createdBy.toString())
      return res.status(401).json({ sucess: false, message: "unauthorized" });
    todo.completed = true;
    await todo.save();
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(404).json({ sucess: false, error });
  }
};

const unmarktodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (req.user.id.toString() !== todo.createdBy.toString())
      return res.status(401).json({ sucess: false, message: "unauthorized" });
    todo.completed = false;
    await todo.save();
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(404).json({ sucess: false, error });
  }
};

const showTodo = async (req, res, next) => {
  try {
    const { sort } = req.query;
    let sortObject = {};
    if (sort == "alphabet") {
      sortObject = { ...sortObject, event: -1 };
    }
    if (sort == "marked") {
      sortObject = { ...sortObject, completed: 1 };
    }
    const todos = await Todo.find({ createdBy: req.user.id }).sort(sortObject);
    todos.reverse();
    res.status(200).json({ sucess: true, todos });
  } catch (error) {
    res.status(404).json({ sucess: false, error });
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (req.user.id.toString() !== todo.createdBy.toString())
      return res.status(401).json({ sucess: false, message: "unauthorized" });

    await Todo.deleteOne({ _id: req.params.id });

    res.status(200).json({ sucess: true });
  } catch (error) {
    // console.log(error);
    res.status(404).json({ sucess: false, error });
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (req.user.id.toString() !== todo.createdBy.toString())
      return res.status(401).json({ sucess: false, message: "unauthorized" });

    todo.event = req.body.event;

    await todo.save();

    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(404).json({ sucess: false, error });
  }
};
module.exports = {
  createTodo,
  marktodo,
  unmarktodo,
  showTodo,
  deleteTodo,
  updateTodo,
};
