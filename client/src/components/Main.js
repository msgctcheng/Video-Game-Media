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
import { WebsiteList, WebsiteItem } from "./Websites";

const articles = {
  padding: "20px",
  margin: "10px",
  border:"silver, 2px, solid",

}

const image = {
  border:"black solid 5px",
}

const searchResult = {
  textAlign:"center",
  backgroundImage: "linear-gradient(black, #0092CA)",
  width:"800px",
  marginLeft:"20%"
}

const caption={
  color:"silver",
  textAlign:"left",
  padding:"10px",
  fontSize:"16px",
}

const captionTitle = {
    fontFamily: "'Lora', serif",
    color:"black",
    background:"white",
    border:"black solid 5px",
    textAlign:"center",

}

class App extends Component {
  state = {
    currentPage: "Home",
    // articleResults: [] ,
    igdbArr: [],
    gameStopArr: [],
    walmartArr:[],
    savedArticles: [],
    savedGames: [],
    searchString: "",
    articleFeed: [],
    gameFeed: [],
    websites: [],
    cardName: "",
    cardSummary: "",
    cardImage: "",
    cardGPrice: "",
    cardWPrice: "",
    category: []
  };

  searchWalmart = (query) => {
    API.walmartSearch(query)
      .then(res => {
        this.setState({ 
          walmartArr: res.items,
          cardWPrice: res.items[0].salePrice}),
        console.log("Walmart Data", res.items)
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
      .then(res => {this.setState({ articleResults: res.articles },
        function() {
          this.handlePage("News");
          //console.log("IGN:", this.state.articleResults)
        }
      )
      })
    }

    // igdbNewsFeed = () => {
    //   axios.get("/api/homeIgdbNewsFeed")
    //   .then(res => {
    //     this.setState({ articleFeed: res.data});
    //     console.log("IGDB Latest News", res.data);
    //   })
    // }
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
    axios.get("/api/retailScrape/" + this.state.searchString)
      .then(res => {
        this.setState({ 
          gameStopArr: res.data,
          cardGPrice: res.data[0].newPrice
        });
        console.log("Gamestop Data", res.data);
      })
    axios.get("/api/savedValues/" + this.state.searchString)
      .then(res => {
        this.setState({ 
          igdbArr: res.data, 
          cardName: res.data[0].name, 
          cardSummary: res.data[0].summary, 
          cardImage: "https://igdb.spacechop.com/igdb/image/upload/t_cover_big/" + res.data[0].cover.cloudinary_id + ".jpg", 
          websites: res.data[0].websites 
        });
        console.log("IGDB Game Data", res.data);
        console.log(res.data[0].websites);
      })
    this.handlePage("Search");
    //call apis 
  }
  
  handlePage = page => {
    this.setState({ 
      currentPage: page 
    })
  }




  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "News") {
      return (
        <div style={articles}>
        <h1>Latest Articles</h1>
          <News />
        </div>
      );
    } else if (this.state.currentPage === "Saved") {
      return <Saved />
    } else if (this.state.currentPage === "Search") {
      return (

        <div style={searchResult}>
          <h1 style={captionTitle}>{this.state.cardName}</h1>
          <img style={image} src={this.state.cardImage}/>
          <p style={caption}>{this.state.cardSummary}</p>
          <WebsiteList className="row">
              {this.state.websites.map(website => {
                return (
                  <WebsiteItem
                    url={website.url}
                    category={website.category}
                  />
                );
              })}
          </WebsiteList>
          <p style={caption}>Gamestop Price: {this.state.cardGPrice}</p>
          <p style={caption}>Walmart Price: ${this.state.cardWPrice}</p>

        </div>
      );
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          handleInputChange={this.handleInputChange.bind(this)}
          currentPage={this.state.currentPage}
          handlePage={this.handlePage}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
