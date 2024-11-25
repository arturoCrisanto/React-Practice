import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskForm setTasks={setTasks} />
      <TaskList />
    </div>
  );
};

export default App;
