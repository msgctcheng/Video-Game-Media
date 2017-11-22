import React, { Component } from "react";
import NewsTabs from "./NewsTabs";
import IGN from "./IGN";
import Polygon from "./Polygon";
import Gamespot from "./Gamespot";

class News extends Component {
  state = {
    currentTab: "IGN"
  };

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
        />
        {this.renderTab()}
      </div>
    );
  }
}

export default News;