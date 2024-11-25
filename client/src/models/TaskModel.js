// src/models/TaskModel.js
import api from "../services/api"; // Fetch or Axios-based API wrapper

const TaskModel = {
  getAllTasks: async () => {
    const response = await api.get("/tasks");
    return response.data;
  },
  createTask: async (taskData) => {
    const response = await api.post("/tasks", taskData);
    return response.data;
  },
  updateTask: async (id, updatedData) => {
    const response = await api.put(`/tasks/${id}`, updatedData);
    return response.data;
  },
  deleteTask: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },
};

export default TaskModel;
