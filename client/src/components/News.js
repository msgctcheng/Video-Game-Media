import React, { Component } from "react";
import NewsTabs from "./NewsTabs";
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
      .then(res => {this.setState({ articles: res.articles })
      // console.log("Mounted:", res.articles);
    })
  }

  ignStuff = () => {
    API.ignTopHeadlines()
     .then(res => {this.setState({ articles: res.articles }) 
    //  console.log("IGN", this.state.articles)
  })
  }
 
  polyStuff = () => {
    API.polygonTopHeadlines()
     .then(res => {this.setState({ articles: res.articles }),
       console.log("POLYGON IS KINDA COOL", res.articles);
     })    
  }

  gamespotStuff = () => {
    axios.get("/api/articleScrape/")
    .then(res => {this.setState({ articles: res.data })
      console.log("GameSpot", res.data);
      // post the article to the database
      // axios.post("/api/saveArticle", res.data[0])
      // .then(res => {
      //   console.log("Res from back-end", res);
      // })
    })
  }

  handleTab = tab => {
    this.setState({ 
      currentTab: tab
    })
  }

  render() {
    return (
      <div>
      
        <NewsTabs
          currentTab={this.state.currentTab}
          handleTab={this.handleTab}
          ignStuff={this.ignStuff}
          polyStuff={this.polyStuff}
          gamespotStuff={this.gamespotStuff}
          // articles={this.state.articles}
        />
        <ArticlesList className="row">
        <div className = "col-md-4">
            {this.state.articles.slice(0, 5).map(article => {
              return (
                <ArticlesItem
                key={article.title}
                title={article.title}
                author={article.author}
                description={article.description}
                summary={article.summary}
                url={article.url}
                img={article.urlToImage}
                image={article.img}
                />
              );
            })}
          </div>
          <div className = "col-md-4">
            {this.state.articles.slice(5,10).map(article => {
              return (
                <ArticlesItem
                key={article.title}
                title={article.title}
                author={article.author}
                description={article.description}
                summary={article.summary}
                url={article.url}
                img={article.urlToImage}
                image={article.img}
                />
              );
            })}
          </div>
          <div className = "col-md-4">
            {this.state.articles.slice(10, 16).map(article => {
              return (
                <ArticlesItem
                key={article.title}
                title={article.title}
                author={article.author}
                description={article.description}
                summary={article.summary}
                url={article.url}
                img={article.urlToImage}
                image={article.img}
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
