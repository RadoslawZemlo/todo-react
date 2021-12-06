import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  return (
    <div>
      <li>{todo.text}</li>
      <button>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
