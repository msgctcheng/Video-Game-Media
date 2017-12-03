import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from './components/Main.js';
import Login from "./components/Login";
import Registration from "./components/Registration";

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
         
        <div className="App">
          <Switch>
             <Route exact path="/" component={Main} />
             <Route path="/registration" component={Registration} />
             <Route path="/login" component={Login} />
            </Switch>
        </div>
       
      </Router>
    );
  }
}

export default App;
