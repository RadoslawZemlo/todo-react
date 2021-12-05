import React from "react";

const TodoForm = ({ setInput }) => {
  const handleInput = e => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        onChange={handleInput}
        type="text"
        placeholder="Add a todo"
        className="todo-input"
      />
      <button className="add-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
