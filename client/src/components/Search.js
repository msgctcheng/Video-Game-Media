import React, { Component } from "react";
import API from "../utils/API";
import { GamesList, GamesItem } from "./GamesList";

class Search extends Component {
	state = {
		gameData: []
	};

	searchWalmart = (query) => {
    API.walmartSearch(query)
      .then(res => {this.setState({ gameData: res.items})
        console.log("Walmart Game Data", this.setState.gameData);
      });
  }

	render() {
		return ( 
			<div>
				<GamesList>
					{this.state.gameData.map(game => {
						return (
							<GamesItem
								name={game.name}
								thumbnail={game.imageEntities.mediumImage}
								price={game.salePrice}
							/>
						);
					})}
				</GamesList>
			</div>
		);
	}
}

export default Search;