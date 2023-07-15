import React, { useState } from "react";
import {PiCircleThin} from "react-icons/pi"

export default function TodoForm(props) {
    
  const [input, setInput] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {/* <PiCircleThin className="inputIcon"/> */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Create new todo..."
      ></input>
    </form>
  );
}
