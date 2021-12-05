import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="todo-app">
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoForm setInput={setInput} />
      <TodoList />
    </div>
  );
}

export default App;
