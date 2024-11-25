const tasks = require("../data/tasks");

// Simulate task storage
let mockTasks = [...tasks];

class TaskModel {
  static getAllTasks() {
    return mockTasks;
  }

  static getTaskById(id) {
    return mockTasks.find((task) => task.id === id);
  }

  static createTask(newTask) {
    const task = { id: mockTasks.length + 1, ...newTask };
    mockTasks.push(task);
    return task;
  }

  static updateTask(id, updatedTask) {
    const taskIndex = mockTasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return null;

    mockTasks[taskIndex] = { ...mockTasks[taskIndex], ...updatedTask };
    return mockTasks[taskIndex];
  }

  static deleteTask(id) {
    const taskIndex = mockTasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return null;

    return mockTasks.splice(taskIndex, 1);
  }
}

module.exports = TaskModel;
