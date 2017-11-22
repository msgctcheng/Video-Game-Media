import React, { Component } from 'react';
import pacman from '../images/packman.png';

const iconStyle={
  width: "300px"

}

const savePage = {
  backgroundImage: "linear-gradient(black, #0092CA)",
  color:"white"

}

const Saved = () =>
	<div>
		<h1>Saved</h1>
		<div className="panel " style={savePage}>
			<div className="panel-heading">
				<h2 className="panel-title">Saved Articles</h2>
			</div>

			<div className="panel-body">
				<ul className="saved-articles">
					<li>First Article</li>
					<li>Second Article</li>
					<li>Third Article</li>
					<li>Fourth Article</li>
				</ul>
				<img className="pacman" src={pacman} alt={"pacman"} style={iconStyle}/>

			</div>
		</div>
	</div>;

export default Saved;