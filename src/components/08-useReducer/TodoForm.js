import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="learn..."
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Add
        </button>
      </form>
    </>
  );
};
