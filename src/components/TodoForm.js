import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const TodoForm = ({ input, setInput, todos, setTodos, setSelect }) => {
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

  const handleSelect = e => {
    setSelect(e.target.value);
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
      <div className="select">
        <select onChange={handleSelect} name="todos" className="select-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
