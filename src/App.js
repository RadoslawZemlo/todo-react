import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const [select, setSelect] = useState("all");
  const [selectedTodos, setSelectedTodos] = useState([]);

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

  useEffect(() => {
    handleSelection();
  }, [todos, select]);

  const handleSelection = () => {
    switch (select) {
      case "completed":
        setSelectedTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setSelectedTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setSelectedTodos(todos);
        break;
    }
  };

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
        setSelect={setSelect}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        selectedTodos={selectedTodos}
      />
    </div>
  );
}

export default App;
