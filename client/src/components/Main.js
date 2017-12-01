import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News";
import Saved from "./Saved";
import Search from "./Search";
import API from "../utils/API";
import axios from "axios";
import { ArticlesList, ArticlesItem } from "./ArticlesList";
import { GamesList, GamesItem } from "./GamesList";

const articles = {

  padding: "20px",
  margin: "10px"
}


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
      .then(res => {this.setState({ retailResults: res.items}),
        console.log("Walmart Data", res.items);
      });
      this.handlePage("Search");
  }

  searchDeals = (query) => {
    API.dealSearch(query)
      .then(res => {
        console.log("Search Deals", res.data);
      });
  }

  initialNews() {
    API.ignTopHeadlines()
      .then(res => {this.setState({ articleResults: res.articles }),
      console.log("state:", this.state.articleResults)}
      )
    this.handlePage("News");
  }
  
  // ignStuff() {
  //   API.ignTopHeadlines()
  //    .then(res => {this.setState({ articleResults: res.articles }), 
  //     console.log("IGN articles", res.articles)}
  //   )
  // }

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
    axios.get("/api/scrape/" + this.state.searchString)
      .then(res => {
        console.log("Gamestop", res.data)}
      )
    axios.get("/api/savedValues/" + this.state.searchString)
      .then(res => {
      console.log("IGDB", res.data)}
      )
    this.handlePage("Search");
    //call apis 
  }
  
  handlePage = page => {
    this.setState({ currentPage: page });
  };




  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "News") {
      return (

        <div style={articles}>
        <h1>Latest Articles</h1>
          <News />
          <ArticlesList className="row">
            <div className = "col-md-4">
            {this.state.articleResults.map(article => {
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
            {this.state.articleResults.map(article => {
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
            {this.state.articleResults.map(article => {
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
      </div>);


    } else if (this.state.currentPage === "Saved") {
      return <Saved />
    } else if (this.state.currentPage === "Search") {
      return (
        <div>
				<GamesList>
					{this.state.retailResults.map(game => {
						return (
							<GamesItem
              name={game.name}
                img={game.mediumImage}
								price={game.salePrice}
							/>
						);
					})}
				</GamesList>
			</div>);
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
          initialNews={this.initialNews.bind(this)}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
