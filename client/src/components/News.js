import React, { Component } from "react";
import NewsTabs from "./NewsTabs";
// import IGN from "./IGN";
// import Polygon from "./Polygon";
// import Gamespot from "./Gamespot";
import API from "../utils/API";
import { ArticlesList, ArticlesItem } from "./ArticlesList";
import axios from "axios";
class News extends Component {
  state = {
    currentTab: "IGN",
    articles: []    
  };

  componentDidMount() {
    API.ignTopHeadlines()
      .then(res => {this.setState({ articles: res.articles }),
      console.log("News:", this.state.articles);
    })
  }

  ignStuff = () => {
    API.ignTopHeadlines()
     .then(res => {this.setState({ articles: res.articles }) 
    //  console.log("IGN", this.state.articles)}
  })
  }
 
  polyStuff = () => {
    API.polygonTopHeadlines()
     .then(res => {this.setState({ articles: res.articles })
      //  console.log("POLYGON", this.state.articles)}
     })
  }

  handleTab = tab => {
    this.setState({ 
      currentTab: tab
    }, function() {
      console.log("tab:", this.state.currentTab);
      console.log("articles:", this.state.articles);
    })


    //GameSPOT article scrape Axios call (move where you like)
    axios.get("/api/articleScrape/")
    .then(res => {
      console.log("GameSpot", res.data);
    })

  };

  render() {
    return (
      <div>
        <NewsTabs
          currentTab={this.state.currentTab}
          handleTab={this.handleTab}
          ignStuff={this.ignStuff}
          polyStuff={this.polyStuff}
          // articles={this.state.articles}
        />
        <ArticlesList className="row">
          <div className = "col-md-4">
            {this.state.articles.splice(5).map(article => {
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
          </div>
          <div className = "col-md-4">
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
          </div>
        </ArticlesList>
      </div>
    );
  }
}

export default News;