import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <li>{text}</li>
      <button>Complete</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
