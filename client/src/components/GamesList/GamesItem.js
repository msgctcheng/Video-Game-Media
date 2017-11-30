import React from "react";

// renders a bootstrap list item containing data from the api call
export const GamesItem = props => (
<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={props.img} alt="img"/>
    <div className="caption">
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
    </div>
  </div>
</div>
);