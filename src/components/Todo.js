import React from "react";

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
    <div>
      <li className={`${todo.completed ? "completed" : ""}`}>{todo.text}</li>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
