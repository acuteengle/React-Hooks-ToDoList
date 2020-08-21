import React from "react";

const TaskInputForm = ({ value, onSubmit, onChange }) => {
  const styles = {
    rows: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 10,
    },
    inputSpacing: {
      width: 400,
    },
    buttonSpacing: {
      marginLeft: 5,
    },
  };

  return (
    <div style={styles.rows}>
      <input
        type="text"
        id="newTask"
        placeholder="New task"
        className="form-control form-control-lg"
        style={styles.inputSpacing}
        value={value}
        onChange={onChange}
      />
      <button
        type="submit"
        className="btn btn-dark btn-lg"
        style={styles.buttonSpacing}
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInputForm;
