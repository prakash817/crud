const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      task: req.body.task,
      desc: req.body.desc,
      status: req.body.status,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
router.put("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  console.log(todoId, req.body);
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json({ updatedTodo, massge: "updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  console.log(todoId, req.body);
  try {
    await Todo.findByIdAndDelete(todoId);
    res.status(201).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.get("/", async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(201).json(allTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
