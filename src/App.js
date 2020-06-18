import React, { useState } from "react";
import TaskInputForm from "./components/TaskInputForm";
import CompletedTaskList from "./components/CompletedTaskList"
import ToDoTaskList from "./components/ToDoTaskList"
import uuid from "react-uuid";

function App() {

  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");

  const [error, setError] = useState("");

  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleCreateNewTask = () => {
    if ((taskName === "")) {
      setError("Please Enter a Task");
    }
    else {
      const tempTask = {
        id: uuid(),
        name: taskName,
        done: false
      }
      
      setTasks([...tasks, tempTask]);
      setTaskName("");
      setError("");
    }
  };

  const handleCompleteTask = (taskID) => {
    const singleTask = tasks.find((t) => {
      // Finds the task that matches the taskID
      return t.id === taskID
    });

    const tempTask = {
      id: singleTask.id,
      name: singleTask.name,
      done: true
    };

    const newTaskList = tasks.map((t) => {
      return t.id === taskID ? tempTask : t
    });

    setTasks(newTaskList);
  };

  const handleDeleteTask = (taskID) => {
    const tempTasks = tasks.filter((t) => {
      // Keeps tasks that don't match the taskID
      return t.id !== taskID
    })
    setTasks(tempTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TaskInputForm
        value={taskName} 
        onSubmit={handleCreateNewTask}
        onChange={handleChangeTaskName}
      />
      {error &&
        <p>{error}</p>
      }
      <h2>To Do Tasks</h2>
      <ToDoTaskList
        tasks={tasks}
        onComplete={handleCompleteTask}
        onDelete={handleDeleteTask}
      />
      <h2>Completed Tasks</h2>
      <CompletedTaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
