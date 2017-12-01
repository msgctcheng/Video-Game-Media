import React from "react";

const article = {
  margin:"10px",
  padding:"10px",
  textAlign:"center",
  backgroundImage: "linear-gradient(black, #0092CA)",
  color:"white",
  fontFamily: "'Lora', serif",

}

const buttons = {
 margin:"10px",
  backgroundImage: "linear-gradient(black, #0092CA)",
  color:"white",

}
// renders a bootstrap list item containing data from the api call
export const ArticlesItem = props => (
  <div  className = "row" >

    <div style = {article} className = "col-md-4">
      <div  className="thumbnail">
        <img src={props.img} alt="img"/>
      <div className="caption">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p><a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Go to Article!</a>
        <a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Save!</a></p>
      </div>
    </div>
  </div>
</div>
);
