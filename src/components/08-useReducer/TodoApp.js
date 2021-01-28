import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import { TodoForm } from './TodoForm';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', payload: newTodo });
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>

        <div className="col-5">
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
