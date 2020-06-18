import React from 'react';

const TaskInputForm = ({ value, onSubmit, onChange }) => {
    return (
        <div>
            <input
                type="text"
                id="newTask"
                placeholder="Task name"
                value={value}
                onChange={onChange}
            />
            <button type="submit" onClick={onSubmit}>Add Task</button>
        </div>
    )
}

export default TaskInputForm;