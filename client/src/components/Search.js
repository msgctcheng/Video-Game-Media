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
			<GamesList>
				<div className="col-md-4">
				{this.state.gameData.map(game => {
					return (
						<GamesItem
							name={game.name}
							thumbnail={game.imageEntities.mediumImage}
							price={game.salePrice}
						/>
					);
				})}
				</div>
			</GamesList>
		);
	}
}

export default Search;