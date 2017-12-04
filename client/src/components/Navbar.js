import React, { Component } from "react";
import logo from '../images/game-rally7.png';
import SearchBar from "./SearchBar";
import API from "../utils/API";

const navbarStyle = {

    fontSize: "17px",
    fontFamily: "'Lora', serif",
    textAlign: "center"
}
const iconStyle = {
  width: "125px"
}



const containerStyle ={
 
  marginTop: 0
}

class Navbar extends Component {
  render() {
    return(
    <nav className="navbar" style={navbarStyle}>
    <div className="container-fluid" style={containerStyle}>
      <div className="navbar-header">
        <img className="icon" src={logo} alt={"logo"} style={iconStyle}/>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav nav-tabs">
        <li
          onClick={() => this.props.handlePage("Home")}
          className={this.props.currentPage === "Home" ? "active" : ""}
        >
          <a>Home</a>
        </li>
          <li
            onClick={() => this.props.handlePage("News")}
            className={this.props.currentPage === "News" ? "active" : ""}
          >
            <a>News</a>
          </li>

        </ul>
        
        <SearchBar 
        handleFormSubmit={this.props.handleFormSubmit}
        handleInputChange={this.props.handleInputChange}/>

        <ul className="nav navbar-nav navbar-right">
          <li
            onClick={() => this.props.handlePage("Saved")}
            className={this.props.currentPage === "Saved" ? "active" : ""}
          >
            <a>Saved</a>
          </li>
          <li><a href="/login">Log In/Out</a></li>
        </ul>
      </div>
    </div>

    </nav>);
  

  }
}
export default Navbar;