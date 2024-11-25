const TaskModel = require("../models/taskModel");
const Joi = require("joi");

// Validation schema using Joi
const validateTask = (task) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    completed: Joi.boolean(),
  });
  return schema.validate(task);
};

const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newTask = TaskModel.createTask(req.body);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const task = TaskModel.getTaskById(parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found.");

  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedTask = TaskModel.updateTask(parseInt(req.params.id), req.body);
  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const deletedTask = TaskModel.deleteTask(parseInt(req.params.id));
  if (!deletedTask) return res.status(404).send("Task not found.");

  res.json(deletedTask);
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
