import React, { Component } from "react";

const buttonStyle = {
    background: "-webkit-gradient(linear, center top, center bottom, from(#fff), to(#ccc))",
    backgroundImage: "linear-gradient(#fff, #ccc)",
    borderRadius: "9px",
    boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.4)",
    height: "35px",
    marginLeft: "5px"
  }

class SearchBar extends Component {
render() {
    return (
        <form className="navbar-form navbar-left">
        <div className="form-group">
             <input type="text" className="form-control" placeholder="Look it Up!" value={this.props.value} onChange={this.props.handleInputChange} name="searchString"/>
        </div>
        <button style={buttonStyle} onClick={this.props.handleFormSubmit} className="btn" >Submit</button>
</form>);
}}
export default SearchBar;