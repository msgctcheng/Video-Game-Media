import React, { Component } from 'react';

const Saved = () =>
	<div>
		<h1>Saved</h1>
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Saved Articles</h3>
			</div>

			<div className="panel-body">
				<ul className="saved-articles">
					<li>First Article</li>
					<li>Second Article</li>
					<li>Third Article</li>
					<li>Fourth Article</li>
				</ul>
			</div>
		</div>
	</div>;

export default Saved;