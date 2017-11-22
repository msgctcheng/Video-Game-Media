import React, { Component } from "react";
import logo from '../images/game-rally7.png';



const navbarStyle = {
    background: "-webkit-gradient(linear, center top, center bottom, from(#fff), to(#ccc))",
    backgroundImage: "linear-gradient(#fff, #ccc)",
    borderRadius: "9px",
    boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.4)",
    background: "#EEEEEE",
    fontSize: "17px",
    fontFamily: "'Lora', serif",
    textAlign: "center"
}
const iconStyle = {
  width: "125px"
}

const containerStyle ={
  background: "-webkit-gradient(linear, center top, center bottom, from(#fff), to(#ccc))",
  backgroundImage: "linear-gradient(#fff, #ccc)",
  borderRadius: "9px",
  boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.4)",
  marginTop: 0
}
const buttonStyle = {
  background: "-webkit-gradient(linear, center top, center bottom, from(#fff), to(#ccc))",
  backgroundImage: "linear-gradient(#fff, #ccc)",
  borderRadius: "9px",
  boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.4)",
  height: "35px",
  marginLeft: "5px"
}


const Navbar = props =>
  <nav className="navbar" style={navbarStyle}>
  <div className="container-fluid" style={containerStyle}>
    <div className="navbar-header">
      <img className="icon" src={logo} alt={"logo"} style={iconStyle}/>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav nav-tabs">
      <li
        onClick={() => props.handlePage("Home")}
        className={props.currentPage === "Home" ? "active" : ""}
      >
        <a>Home</a>
      </li>
        <li
          onClick={() => props.handlePage("News")}
          className={props.currentPage === "News" ? "active" : ""}
        >
          <a>News</a>
        </li>

      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Look it Up!"/>
        </div>
        <button style={buttonStyle} type="submit" className="btn ">Submit</button>
      </form>

      <ul className="nav navbar-nav navbar-right">
        <li
          onClick={() => props.handlePage("Saved")}
          className={props.currentPage === "Saved" ? "active" : ""}
        >
          <a>Saved</a>
        </li>
        <li><a href="">Log In/Out</a></li>
      </ul>
    </div>
  </div>
  </nav>;

export default Navbar;