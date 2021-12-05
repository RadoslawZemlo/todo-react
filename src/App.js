import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
