import React from "react";
import logo from "../static/trollface.svg"
import "./navbar.css"

export function Navbar(){
  return (
    <div className="navbar">
      <div className="leftPart">
        <img src={logo}></img>
        <h4>Meme Generator</h4>
      </div>
      <div className="rightPart">
        <h4>React Course - Project 3</h4>
      </div>
    </div>
  )
}