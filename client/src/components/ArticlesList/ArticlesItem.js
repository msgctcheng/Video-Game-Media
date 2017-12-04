import React from "react";

const article = {
  margin:"10px",
  padding:"10px",
  textAlign:"center",
  backgroundImage: "linear-gradient(black, #0092CA)",

}

const caption = {
  color:"black",
  fontSize:"17px"
}

const captionTitle = {
    fontFamily: "'Lora', serif",
    color:"silver",

}

const buttons = {
  margin:"10px",
  color:"black",
  fontFamily: "'Lora', serif",
  background: "-webkit-gradient(linear, center top, center bottom, from(#fff), to(#ccc))",
  backgroundImage: "linear-gradient(#fff, #ccc)",
  borderRadius: "9px",
  boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.4)",
  height: "35px",
}
// renders a bootstrap list item containing data from the api call
export const ArticlesItem = props => (
 
      <div style = {article} className="thumbnail">
        <img src={props.img} alt="img"/>
      <div>
        <h3 style = {captionTitle}>{props.title}</h3>
        <p style = {caption}>{props.description}</p>
        <p><a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Go to Article!</a>
        <a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Save!</a></p>
      </div>

</div>
);
