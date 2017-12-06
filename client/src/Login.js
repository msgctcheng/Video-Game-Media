import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import jquery from "jquery";

class Login extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
   
  }

  logout() {
    this.props.auth.logout();
  
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div id="loginBox">
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    id="signOn"
                    onClick={this.login.bind(this)}
                  >Log In</Button>
                )
            }
            {
             isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                    id="signOut"
                  >Log Out</Button>
                )
            }
        
      </div>
    );
  }
}

export default Login;