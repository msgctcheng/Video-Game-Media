import React, { Component } from "react";
import axios from "axios";
import { GamesList, GamesItem } from "./GamesList";
import { ArticlesList, ArticlesItem } from "./ArticlesList";

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


class Saved extends Component { 
  state = {
    savedArticles: [],
    savedGames: []  
	};

	componentDidMount() {
		axios.get("/api/retrieveArticles")
		.then(res => {
			this.setState({ savedArticles: res.data });
			console.log("RETRIEVING ARTICLES", res.data);
		})
		axios.get("/api/retrieveGames")
		.then(res => {
			this.setState({ savedGames: res.data });
			console.log("RETRIEVING GAMES", res.data);
		})
	}

	render() {
		return (
			<div className ="body" >
			<h1> Home</h1>
			<div className="row">
				<div  className=" col-md-4">
					<div className="panel-heading">
					<h3 className="panel-title" style={headings}>Saved Games</h3>
					</div>
						<div className="panel-body">
					<GamesList>
					<div className="col-md-4">
						{this.state.savedGames.map(game => {
							return (
								<GamesItem
									key={game.title}
									name={game.title}
									thumbnail={game.imgUrl}
								/>
							);
						})}
					</div>
					</GamesList>
					</div>
				</div>
	
				<div   className="  col-md-4">
					<div className="panel-heading">
						<h3 className="panel-title" style={headings}>Saved Articles</h3>
					</div>
	
					<div className="panel-body">
					<ArticlesList className="row">
						{this.state.savedArticles.map(article => {
							return (
								<ArticlesItem
									key={article.title}
									title={article.title}
									summary={article.text}
									url={article.sourcel}
								/>
							);
						})}
					</ArticlesList>
					</div>
				</div>
	</div>
			
		</div>
		);
	}
}
export default Saved;
