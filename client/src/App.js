import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import './App.css';


class App extends Component {
  state = {
    currentPage: "Home"
  };

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
          currentPage={this.state.currentPage}
          handlePage={this.handlePage}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
