import React from 'react';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => (
  <li className="list-group-item" key={todo.id}>
    <p
      className={todo.done ? 'complete' : ''}
      onClick={() => handleToggle(todo.id)}
    >
      {index + 1} {todo.desc}
    </p>
    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
      Delete
    </button>
  </li>
);

export default TodoListItem;
