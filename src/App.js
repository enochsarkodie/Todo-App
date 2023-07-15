import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });
  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  
  return (
    <div className="todo-app">
      <h1>T O D O</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
         
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
        <div className="todo-footer">
        
      <div className="toggles">
      <span className="first-footer">{activeTodoCount} items left</span>
      
        <span className= "btn" onClick={() => filterTodos("all")}>All</span>
        <span className= "btn" onClick={() => filterTodos("active")}>Active</span>
        <span className= "btn" onClick={() => filterTodos("completed")}>Completed</span>
        
        <span className="btn1"   onClick={clearCompletedTodos}>Clear Completed</span>
      </div>
    </div>
    </div>
  );
}

export default App;
