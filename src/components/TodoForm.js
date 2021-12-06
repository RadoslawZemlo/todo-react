import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const TodoForm = ({ input, setInput, todos, setTodos }) => {
  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input === "") return;

    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 }
    ]);
    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="Add a todo"
        className="todo-input"
      />
      <button onClick={handleSubmit} className="add-button" type="submit">
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default TodoForm;
