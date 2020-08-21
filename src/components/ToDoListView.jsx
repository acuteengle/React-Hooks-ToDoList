import React, { useState } from "react";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TaskInputForm from "./TaskInputForm";
import ToDoTaskList from "./ToDoTaskList";

const ToDoListView = (props) => {
  const styles = {
    columns: {
      display: "flex",
      flexDirection: "column",
      width: 600,
      margin: "auto",
    },
    rows: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 10,
    },
    header: {
      textAlign: "center",
    },
    error: {
      color: "red",
    },
  };

  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");

  const [error, setError] = useState("");

  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleCreateNewTask = (event) => {
    if (taskName === "") {
      setError("Please Enter a Task");
    } else {
      const tempTask = {
        id: uuid(),
        name: taskName,
        done: false,
      };

      setTasks([...tasks, tempTask]);
      setTaskName("");
      setError("");
    }
  };

  const handleCompleteTask = (taskID, complete) => (event) => {
    const singleTask = tasks.find((t) => {
      return t.id === taskID;
    });

    const tempTask = {
      id: singleTask.id,
      name: singleTask.name,
      done: complete ? true : false,
    };

    const newTaskList = tasks.map((t) => {
      return t.id === taskID ? tempTask : t;
    });

    setTasks(newTaskList);
  };

  const handleDeleteTask = (taskID) => (event) => {
    const tempTasks = tasks.filter((t) => {
      return t.id !== taskID;
    });

    setTasks(tempTasks);
  };

  return (
    <div style={styles.columns}>
      <h1 style={styles.header}>Task List</h1>
      <div style={styles.rows}>
        <TaskInputForm
          value={taskName}
          onSubmit={handleCreateNewTask}
          onChange={handleChangeTaskName}
        />
        {error && <p style={styles.error}>{error}</p>}
      </div>
      <div style={styles.rows}>
        <div>
          <h2 style={styles.header}>To Do</h2>
          <ToDoTaskList
            tasks={tasks}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
            complete={false}
          />
        </div>
        <div>
          <h2 style={styles.header}>Completed</h2>
          <ToDoTaskList
            tasks={tasks}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
            complete={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoListView;
