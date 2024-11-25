// src/controllers/TaskController.js
import TaskModel from "../models/TaskModel";

const TaskController = {
  fetchTasks: async (setTasks) => {
    try {
      const tasks = await TaskModel.getAllTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
  addTask: async (taskData, setTasks) => {
    try {
      const newTask = await TaskModel.createTask(taskData);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },
  updateTask: async (id, updatedData, setTasks) => {
    try {
      const updatedTask = await TaskModel.updateTask(id, updatedData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  },
  deleteTask: async (id, setTasks) => {
    try {
      await TaskModel.deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
};

export default TaskController;
