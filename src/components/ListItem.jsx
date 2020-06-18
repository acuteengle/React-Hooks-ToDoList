import React from 'react';

const ListItem = ({ task, onComplete=null, onDelete }) => {
    return (
        <li>
            <div>
                <p>{task.name}</p>
                <button type="submit" onClick={() => onDelete(task.id)}>Delete</button>
                {onComplete &&
                    <button type="submit" onClick={() => onComplete(task.id)}>Complete</button>
                }
            </div>
        </li>
    )
}

export default ListItem;