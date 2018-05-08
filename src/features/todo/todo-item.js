import React from 'react';

const todoItem = ({todo}) => {
    return(
        <div className="todo-item">
            <h2>{todo.title}</h2>
        </div>
    );
}

export default todoItem;