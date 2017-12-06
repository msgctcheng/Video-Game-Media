import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Main from './components/Main.js';
import Login from "./Login";
import Auth from "./Auth/Auth";
import history from "./history";
import './App.css';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history} component={Login}>
         
        <div className="App">
         
          <Route path="/" render={(props) => <Main auth={auth} {...props} />}/>
         
        </div>
       
      </Router>
    );
  }
}

export default App;
