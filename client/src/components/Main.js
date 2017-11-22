import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News";
import Saved from "./Saved";
import Search from "./Search";
import API from "../utils/API";
import axios from "axios";

class App extends Component {
  state = {
    currentPage: "Home",
    articleResults: [],
    retailResults: [],
    savedArticles: [],
    savedGames: []
  };

  searchWalmart = (query) => {
    API.walmartSearch(query)
      .then(res => {
        console.log(res);
      });
  }
 searchDeals = (query) => {
   API.dealSearch(query)
      .then(res => {
        console.log(res);
     });
 }

  handleInputChange = (event) => {
  const value = event.target.value;
  const name = event.target.name;
  
  this.setState({
    [name]: value
  });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchWalmart(this.state);
    this.searchDeals(this.state);
    axios.get("/api/savedValues/" + this.state.searchString).then(res => {
      console.log(res);
    })
    //call apis 
  }
  handlePage = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "News") {
      return <News />;
    } else if (this.state.currentPage === "Saved") {
      return <Saved />
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          currentPage={this.state.currentPage}
          handlePage={this.handlePage}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
