import React, { Component } from "react";
import axios from "axios";
import { GamesList, GamesItem } from "./GamesList";

const iconStyle={
  width: "100px"
}

const panels = {
  backgroundImage: "linear-gradient(black, #0092CA)",
  color:"white",
  textAlign:"center"
}
const headings = {
  fontSize: "23px",
  fontFamily: "'Lora', serif",
  color: "white"

}


const subheadings = {
  fontSize: "15px",
   fontFamily: "'Lora', serif",
  color: "white",
  textAlign: 'center' 
}


class Home extends Component {
  
  state = {
    articleFeed: [],
    gameFeed: []    
  };
  
  componentDidMount() {
    // axios.get("/api/homeIgdbNewsFeed")
    // .then(res => {
    //   this.setState({ articleFeed: res.data});
    //   console.log("IGDB Latest News", res.data);
    // })
    
    axios.get("/api/homePopularGames")
    .then(res => {
      this.setState({ gameFeed: res.data});
      console.log("IGDB Popular Games", res.data);
    })
  };

  // igdbPopularGames = () => {
  //   axios.get("/api/homePopularGames")
  //   .then(res => {
  //     this.setState({ gameFeed: res.data});
  //     console.log("IGDB Popular Games", res.data);
  //   })
  // }

  
  
  render () {
  return (
  <div className ="body" >
    <h1>Home</h1>
    <div className="row">
      <div style={panels} className="panel col-md-4">
        <div className="panel-heading">
        <h3 className="panel-title" style={headings}>Popular Games list</h3>
        </div>

        <div  className="panel-body">
        Some Popular Games should go here
        <GamesList>
					{this.state.gameFeed.slice(0, 5).map(game => {
						return (
							<GamesItem
								name={game.name}
								thumbnail={game.cover.url}
								// price={game.salePrice}
							/>
						);
					})}
				</GamesList>
        <GamesList>
					{this.state.gameFeed.slice(5, 10).map(game => {
						return (
							<GamesItem
								name={game.name}
								thumbnail={game.cover.url}
								// price={game.salePrice}
							/>
						);
					})}
				</GamesList>
        </div>
      </div>

      <div style={panels}  className="panel  col-md-4">
        <div className="panel-heading">
          <h3 className="panel-title" style={headings}>Latest News list</h3>
        </div>

        <div className="panel-body">
          Some Cool News should go here
        </div>
      </div>
        
        <div style={panels} className = "col-md-4" >
         <div  className="panel-heading row" >
            <h3 className="panel-title"  style={headings}>Latest Videos</h3>
          </div>
          <div className = "row">
            <h3 style={subheadings}>IGN</h3>
            <iframe  width="400" height="315" src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=IGNentertainment" frameBorder="0" allowFullScreen></iframe> 
            <h3 style={subheadings}>Polygon</h3>
            <iframe  width="400" height="315" src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=polygon" frameBorder="0" allowFullScreen></iframe> 
            <h3 style={subheadings}>Gamespot</h3>
            <iframe  width="400" height="315" src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=gamespot" frameBorder="0" allowFullScreen></iframe> 
          </div>
    </div>
</div>
    
  </div>
    )
  }
}

export default Home;




