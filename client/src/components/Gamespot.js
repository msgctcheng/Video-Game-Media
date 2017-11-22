import React from "react";

const Gamespot = () =>
  <div className="gamespot-headlines container">
  	<div className = "row">
  		<div className = "col-md-6 iconTile"> 
  			<h1> Latest Gamespot Videos</h1>
  			<iframe width="450" height="315" src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=gamespot" frameBorder="0" allowFullScreen></iframe> 
  			<iframe className="video" width="450" height="315" src="https://www.youtube.com/embed/videoseries?list=PLpg6WLs8kxGOO1cG272ZR1Po1iTJcnNT-&hl=en_US" frameBorder="0" allowFullScreen></iframe>
			<iframe className="video" width="450" height="315" src="https://www.youtube.com/embed/videoseries?list=PLpg6WLs8kxGMnbziXtzlUhLeHHyZAEACR&hl=en_US" frameBorder="0" allowFullScreen></iframe>
			<iframe className="video" width="450" height="315" src="https://www.youtube.com/embed/videoseries?list=PLpg6WLs8kxGNdvahXQ0yAFs6faDzXJwSd&hl=en_US" frameBorder="0" allowFullScreen></iframe>
  		</div>
		<div className = "col-md-6">
	    	<div>
				<h1> Gamespot Headlines</h1>
				<h3>First News Article</h3>
				<img src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/vkontakte-120.png" alt="pic2"/>		
				<p> Paragraph with summaries of articles. </p>
			</div>
			<div>
				<h3>Second News Article</h3>
				<img src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/twitch-120.png" alt="pic1"/>
				<p> Paragraph with summaries of articles. </p>
			</div>
			<div>
				<h3>Third News Article</h3>
				<img src="https://lh4.ggpht.com/YTDiP6yryhXLOFaG7-ZY0kkpRgAUQ-dipJytepR-pmiJO_RJqemDDiNhS_LvUCkoThA=w120" alt="pic5"/>
				<p> Paragraph with summaries of articles. </p>
			</div>
			<div>
				<h3>Fourth News Article</h3>
				<img src="http://www.iconninja.com/files/503/812/914/meetup-icon.png" alt="pic3"/>
				<p> Paragraph with summaries of articles. </p>
			</div>
			<div>
				<h3>Fifth News Article</h3>
				<img src="http://classwithapps.com/wp-content/uploads/2013/02/settings.png" alt="pic4"/>
				<p> Paragraph with summaries of articles. </p>
			</div>
		</div>
	</div>

  </div>

export default Gamespot; 