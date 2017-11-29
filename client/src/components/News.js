import React, { Component } from "react";
import NewsTabs from "./NewsTabs";
import IGN from "./IGN";
import Polygon from "./Polygon";
import Gamespot from "./Gamespot";
import API from "../utils/API";
import { ArticlesList, ArticlesItem } from "./ArticlesList";

class News extends Component {
  state = {
    currentTab: "IGN",
    articles: []    
  };

  ignStuff = () => {
    API.ignTopHeadlines()
     .then(res => {this.setState({ articles: res.articles }), 
     console.log("IGN is AWESOME!", res.articles)}
   )
  }
 
  polyStuff = () => {
    API.polygonTopHeadlines()
     .then(res => {this.setState({ articles: res.articles }),
       console.log("POLYGON IS KINDA COOL", res.articles)}
     )
  }

  handleTab = tab => {
    this.setState({ currentTab: tab });
  };

  // renderTab = () => {
  //   if (this.state.currentTab === "IGN") {
  //     return (<IGN />);
  //   } else if (this.state.currentTab === "Polygon") {
  //     return <Polygon />;
  //   } else if (this.state.currentTab === "Gamespot") {
  //     return <Gamespot />;
  //   } else {
  //     return <IGN />;
  //   }
  // };

  render() {
    return (
      <div>
        <NewsTabs
          currentTab={this.state.currentTab}
          handleTab={this.handleTab}
          ignStuff={this.ignStuff}
          polyStuff={this.polyStuff}
          articles={this.state.articles}
        />
        <ArticlesList>
          {this.state.articles.map(article => {
            return (
              <ArticlesItem
              key={article.title}
              title={article.title}
              author={article.author}
              description={article.description}
              url={article.url}
              img={article.urlToImage}
              />
            );
          })}
        </ArticlesList>
        {this.state.currentTab}
      </div>
    );
  }
}

export default News;