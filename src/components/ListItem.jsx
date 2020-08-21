import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ListItem = ({ task, complete, onComplete, onDelete }) => {
  // https://colorhunt.co/palette/196113
  const styles = {
    itemContainer: {
      padding: 10,
      margin: 5,
      backgroundColor: "#3282b8",
      borderRadius: 5,
    },
    textContainer: {
      padding: 10,
      margin: "0px 2px 10px",
      backgroundColor: "#bbe1fa",
      borderRadius: 5,
    },
    buttonSpacing: {
      margin: 2,
    },
  };
  return (
    <div style={styles.itemContainer}>
      <p style={styles.textContainer}>{task.name}</p>
      <button
        type="submit"
        className="btn btn-danger btn-sm"
        style={styles.buttonSpacing}
        onClick={onDelete(task.id)}
      >
        Delete
      </button>
      {!complete ? (
        <button
          type="submit"
          className="btn btn-success btn-sm"
          style={styles.buttonSpacing}
          onClick={onComplete(task.id, true)}
        >
          Complete
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-secondary btn-sm"
          style={styles.buttonSpacing}
          onClick={onComplete(task.id, false)}
        >
          Uncomplete
        </button>
      )}
    </div>
  );
};

export default ListItem;
