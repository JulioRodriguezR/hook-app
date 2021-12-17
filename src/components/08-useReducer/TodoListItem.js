import React from 'react'

import './styles.css';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle}) => {

  return (
    <div>
      <li key={todo.id} className="list-group-item">
        <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>{index + 1}. {todo.desc}</p>
        <button className="btn btn-danger ml-2" onClick={() => handleDelete(todo.id)}>Remove</button>
      </li>
    </div>
  );

}
