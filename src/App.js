import React, { useState, useEffect } from "react";
import Task from "./Task";

const App = () => {
  const removeItem = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };
  const checkIt = (e) => {
    e.preventDefault();
    if (todoValue.trim() !== "") {
      pushit();
    } else {
      alert("enter task");
    }
  };

  const pushit = (e) => {
    setTodos([...todos, todoValue]);
    setTodoValue("");
  };

  const getLocal = () => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  const setLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    setLocal();
    getLocal();
  }, []);
  useEffect(() => {
    setLocal();
  }, [checkIt, removeItem]);

  const [todos, setTodos] = useState(() => {
    return localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  });
  const [todoValue, setTodoValue] = useState("");

  return (
    <>
      <form onSubmit={checkIt} className="container">
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="enter your task"
          type="text"
        />
        <button className="submit">+</button>
      </form>

      {todos.map((todo, index) => {
        return (
          <Task removeItem={removeItem} id={index} key={index} todo={todo} />
        );
      })}
    </>
  );
};

export default App;

