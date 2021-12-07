import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  // Save todos to local storage
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  useEffect(() => {
    const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveTodos();
  }, [todos]);

  return (
    <div className="todo-app">
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
