import React from 'react';
import ListItem from './ListItem';

const CompletedTaskList = ({ tasks, onDelete }) => {
    const completedTasks = tasks.filter((t) => {
        return t.done
    });
    return (
        <ul>
            {completedTasks.map((task) => {
                return (
                    <ListItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                    />
                )
            })
            }
        </ul>
    )
}

export default CompletedTaskList;