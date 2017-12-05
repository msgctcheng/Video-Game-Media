import React, { Component } from "react";
import axios from "axios";
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
    }

loginUser = (mail, pw) => {
    axios.get("/api/findUser/${mail}", {})
    .then(function(response) {
    axios.post("/api/login", {
        email: mail,
        password: pw
    }).then(function(response) {
        console.log(response);
    }).catch(function(error){
        console.error(error);
    });
})
}

handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
}

handleFormSub = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
        this.loginUser(this.state.email, this.state.password);
    } else {
        console.log("Fill entire Form");
    }
}

render() {
    return (
        <div id="loginBox">
            <form id="loginForm">
                <label htmlFor="emailInput">Email Address</label>
                <input name="email" onChange={this.handleChange} type="email" id="emailInput" placeholder="email@address.com" />
                <label htmlFor="passwordInput">Password</label>
                <input name="password" onChange={this.handleChange} type="password" id="passwordInput" placeholder="Password"/>
                <button onClick={this.handleFormSub} type="submit"> Log in </button>
                <a href="/registration"> Register!</a> 
            </form>
        </div>
    )
}
}
export default LoginForm;