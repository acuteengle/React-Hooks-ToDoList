import React from "react";
import ListItem from "./ListItem";

const ToDoTaskList = ({ tasks, onComplete, onDelete, complete = false }) => {
  const styles = {
    flexContainer: {
      display: "flex",
      flexDirection: "column",
    },
  };
  let tasksList;
  if (complete) {
    tasksList = tasks.filter((t) => {
      return t.done;
    });
  } else {
    tasksList = tasks.filter((t) => {
      return !t.done;
    });
  }

  return (
    <div className={styles.flexContainer}>
      {tasksList.map((task) => {
        return (
          <ListItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            complete={complete}
          />
        );
      })}
    </div>
  );
};

export default ToDoTaskList;
