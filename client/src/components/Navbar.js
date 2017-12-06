import React, { Component } from "react";
import logo from '../images/game-rally-name2.png';
import Login from "../Login";
import SearchBar from "./SearchBar";
import API from "../utils/API";
import Auth from "../Auth/Auth";
import history from "../history";


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
const navbarStyle = {

    fontSize: "17px",
    fontFamily: "'Lora', serif",
    textAlign: "left",
    paddingTop:"20px"
}
const iconStyle = {
  width: "200px",
  marginTop:"0",

}

const name = {
  color: "white",
  fontSize: "17px",
  fontFamily: "'Lora', serif",
  textAlign: "center",
  marginRight: "10px",
}

const nameStyle = {

  width:"100",
}


const containerStyle ={
 
  marginTop: 0
}

class Navbar extends Component {
  render() {
    return(
    <nav className="navbar" style={navbarStyle}>
    <img className="icon" src={logo} alt={"logo"} style={iconStyle}/>

    <div className="container-fluid" style={containerStyle}>
      <div className="navbar-header"style={name}>



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
          <li><Login auth={auth} /></li>
        </ul>
      </div>
    </div>

    </nav>);
  

  }
}
export default Navbar;