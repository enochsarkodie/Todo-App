import React from "react";
import { RxCross1 } from "react-icons/rx";
// import {MdCheckCircle, MdRadioButtonUnchecked} from 'react-icons/md'
import { CiCircleCheck } from "react-icons/ci";

export default function Todoitem(props) {
  const { todo, removeTodo, completeTodo } = props;
  return (
    <div className={todo.completed ? "todo-row complete": "todo-row"} key={todo.id} completed={todo.completed}>
      <div><CiCircleCheck className="icon2" onClick={()=> completeTodo(todo.id)}/></div>
      {todo.text}
      <div className="iconsContainer">
        <RxCross1
          className="icon"
          // style={{ marginRight: "5" }}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
       
    </div>
  );
}
