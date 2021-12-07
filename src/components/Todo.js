import React from "react";
import { IoIosCheckbox, IoIosTrash } from "react-icons/io";

const Todo = ({ todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="button check-btn" onClick={handleComplete}>
        <IoIosCheckbox />
      </button>
      <button className="button trash-btn" onClick={handleDelete}>
        <IoIosTrash />
      </button>
    </div>
  );
};

export default Todo;
