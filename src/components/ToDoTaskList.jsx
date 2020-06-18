import React from 'react';
import ListItem from './ListItem';

const CompletedTaskList = ({ tasks, onComplete, onDelete }) => {
    const toDoTasks = tasks.filter((t) => {
        return !t.done
    });
    return (
        <ul>
            {toDoTasks.map((task) => {
                return (
                    <ListItem
                        key={task.id}
                        task={task}
                        onComplete={onComplete}
                        onDelete={onDelete}
                    />
                )
            })
            }
        </ul>
    )
}

export default CompletedTaskList;