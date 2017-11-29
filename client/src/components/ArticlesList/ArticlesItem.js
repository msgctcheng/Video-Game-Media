import React from "react";

// renders a bootstrap list item containing data from the api call
export const ArticlesItem = props => (
<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={props.img} alt="img"/>
    <div className="caption">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p><a className="btn btn-primary" role="button" href={props.url}>Go to Article!</a></p>
    </div>
    </div>
  </div>
</div>
);
