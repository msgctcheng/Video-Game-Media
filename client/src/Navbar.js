import React, { Component } from "react";
import logo from './game-rally7.png';
import './navbar.css';


const Navbar = props =>
  <nav className="navbar ">
  <div className="container-fluid">
    <div className="navbar-header">
      <img className="icon" src={logo} alt={"logo"}/>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
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
        <button type="submit" className="btn ">Submit</button>
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