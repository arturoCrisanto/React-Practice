import React, { useEffect, useState } from "react";
import TaskController from "../controllers/TaskController";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskController.fetchTasks(setTasks);
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() => TaskController.deleteTask(task.id, setTasks)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
