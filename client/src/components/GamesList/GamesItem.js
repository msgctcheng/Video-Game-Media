import React from "react";


const gamesList = {
  margin: "10px",
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
    color:"black",
    background:"white",
    border:"black solid 5px"


}

const image = {
  border:"black solid 5px"
}



// renders a bootstrap list item containing data from the api call
export const GamesItem = props => (
<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail" style={article}>
      <h3 style={captionTitle}>{props.title}</h3>
      <img style={image} src={props.img} alt={props.title}/>
    <div className="caption" style ={caption}>
      <p>{props.summary}</p>
      <p> ${props.price}</p>
      <p>
        <a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Buying Option</a>
        <a style = {buttons} className="btn btn-primary" role="button" href={props.url}>Save Game</a>
      </p>

    </div>
    </div>
  </div>
</div>
);