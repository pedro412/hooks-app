import React from 'react';
import TodoListItem from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => (
  <ul className="list-group list-group-flush">
    {todos.map((todo, index) => (
      <TodoListItem
        key={todo.id}
        index={index}
        todo={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

export default TodoList;
