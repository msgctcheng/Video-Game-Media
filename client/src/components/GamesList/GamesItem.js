import React from "react";

// renders a bootstrap list item containing data from the api call
export const GamesItem = props => (
<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title}/>
    <div className="caption">
      <p>{props.summary}</p>
      <p>{props.price}</p>
    </div>
    </div>
  </div>
</div>
);