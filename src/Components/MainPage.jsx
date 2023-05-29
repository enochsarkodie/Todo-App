import React from "react"
import "./Styles.css"
import {HiOutlineMoon} from "react-icons/hi"
import {BsCircle} from "react-icons/bs"
import lightImg from "./Images/bg-desktop-light.jpg"


function MainPage(){

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
                    list container
            </div>
            <span>Drag and drop to reorder list</span>
        </div>
    )
}

export default MainPage;