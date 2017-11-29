import React, { Component } from "react";
import NewsTabs from "./NewsTabs";
import IGN from "./IGN";
import Polygon from "./Polygon";
import Gamespot from "./Gamespot";
import API from "../utils/API";

class News extends Component {
  state = {
    currentTab: "IGN",
    
  };

  ignStuff = () => {
    API.ignTopHeadlines()
     .then(res => {
       console.log("IGN IS AWESOME", res)
     });
  }
 
  polyStuff = () => {
    API.polygonTopHeadlines()
     .then(res => {
       console.log("POLYGON IS KINDA COOL", res)
     });
  }

  handleTab = tab => {
    this.setState({ currentTab: tab });
  };

  renderTab = () => {
    if (this.state.currentTab === "IGN") {
      return <IGN />;
    } else if (this.state.currentTab === "Polygon") {
      return <Polygon />;
    } else if (this.state.currentTab === "Gamespot") {
      return <Gamespot />;
    } else {
      return <IGN />;
    }
  };

  render() {
    return (
      <div>
        <NewsTabs
          currentTab={this.state.currentTab}
          handleTab={this.handleTab}
          ignStuff={this.ignStuff}
          polyStuff={this.polyStuff}
        />
        {this.renderTab()}
      </div>
    );
  }
}

export default News;