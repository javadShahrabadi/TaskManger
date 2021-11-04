const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name!"], // require value and default message
    trim: true, // fix space in value
    maxlength: [20, "name can not be more than 20 characters!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
