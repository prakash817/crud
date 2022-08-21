const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: String,
  desc: String,
  status: { type: Boolean, default: false },
  userId: String,
});

module.exports = mongoose.model("todo", TodoSchema);
