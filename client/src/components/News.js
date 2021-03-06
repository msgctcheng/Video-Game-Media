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
     .then(res => {this.setState({ articles: res.articles })
     })    
  }
  

  gamespotStuff = () => {
    axios.get("/api/articleScrape/")
      .then(res => {this.setState({ articles: res.data })
    })
  }

  clickToSave = (article) => {
    axios.post("/api/saveArticle", article)
    .then(res => {
      console.log("Click", res.data);
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
                clickToSave={() => this.clickToSave(article)}
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
                clickToSave={() => this.clickToSave(article)}
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
                clickToSave={() => this.clickToSave(article)}               
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
