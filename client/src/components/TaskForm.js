import React, { useState } from "react";
import TaskController from "../controllers/TaskController";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    TaskController.addTask({ title }, setTasks);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
