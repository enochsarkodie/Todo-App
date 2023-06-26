import React, { useState } from "react"
import "./Styles.css"
import {HiOutlineMoon} from "react-icons/hi"
import {BsCircle} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"
import lightImg from "./Images/bg-desktop-light.jpg"
import { todoList } from "./dummyData"


function MainPage(){
    const [tasks, setTasks] = useState(todoList)

    return( 
        <div className="main">
            <div className="backgroundImage">
                <img src={lightImg} alt='background'/>
            </div>
            <div className="heading">
                <h1>TODO</h1>
                <span><HiOutlineMoon /></span>
            </div>
            <div className="inputField">
                    <span><BsCircle /></span>
                    <input type="text" placeholder="Add a task"/>
            </div>
            <div className="listContainer">
                <div className="listItems">
                    {tasks.map(item=>{
                        return (
                            <div className="item">
                                <div>
                                    <BsCircle 
                                        size={25} 
                                        color="rgba(0,0,0,0.2)" 
                                        className="circle"/>
                                    <li>{item.task}</li>
                                </div>
                                <FaTimes size={25} color="rgba(0,0,0,0.2)" />
                            </div>
                        )
                    })}
                </div>
                <div className="bottom">
                    <span>{tasks.length} Items left</span>
                    <span className="filter">
                        <span>All</span>
                        <span>Active</span>
                        <span>Completed</span>
                    </span>
                    <span>Clear Completed</span>
                </div>
            </div>
            <span>Drag and drop to reorder list</span>
        </div>
    )
}

export default MainPage;