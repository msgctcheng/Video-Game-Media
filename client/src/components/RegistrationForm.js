import React, { Component } from "react";
import axios from "axios";

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: ""
        }
    };

registerUser = (mail, pw, cpw, fname, lname) => {
    axios.post("/api/register", {
        email: mail,
        password: pw,
        confirmPassword: cpw,
        firstName: fname,
        lastName: lname
    }).then( function(res){
        console.log(res);
    }).catch( function(error){
        console.error(error);
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password && this.state.confirmPassword && this.state.firstName && this.state.lastName) {
        this.registerUser(this.state.email, this.state.password, this.state.confirmPassword, this.state.firstName, this.state.lastName);
    } else {
        console.log("Fill out entire form");
    }
}
handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
}

render() {
    return (
        <form id="regForm">
            <h2> Enter your information. </h2>
            <hr/>
            <label htmlFor="email">Email Address</label>
            <input name="email" onChange={this.handleInput} type="text" id="email" placeholder="email@address.com" required autoFocus/>
            <label htmlFor="password">Password</label>
            <input name="password" onChange = {this.handleInput} type="password" id="password" placeholder="At least 6 characters" required /> 
            <label htmlFor="password">Confirm Password</label>
            <input name="confirmPassword" onChange={this.handleInput} type="password" id="passwordConfirm" placeholder="Re-enter Password" required /> 
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={this.handleInput} type="string" id="fname" placeholder="First Name" required />
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={this.handleInput} type="string" id="lname" placeholder="Last Name" required />
            <br />
            <button onClick={this.handleSubmit} type="submit" id="regbutton">Button</button> 
        </form>
    )
}
};

export default RegistrationForm;
