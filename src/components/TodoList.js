import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, selectedTodos }) => {
  return (
    <div className="todos-container">
      <ul className="todos-list">
        {selectedTodos.map(todo => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
