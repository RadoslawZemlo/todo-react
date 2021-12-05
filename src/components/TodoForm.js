import React from "react";

const TodoForm = () => {
  return (
    <form className="todo-form">
      <input type="text" placeholder="Add a todo" className="todo-input" />
      <button className="add-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
