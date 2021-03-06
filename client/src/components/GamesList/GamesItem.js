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
  textAlign:"center",
  backgroundImage: "linear-gradient(black, #0092CA)",
  width:"375px",
  border:"silver, 2px, solid"

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
  border:"black solid 5px",
}


// renders a bootstrap list item containing data from the api call
export const GamesItem = props => (
<div className="row">
  <div className="thumbnail" style={article}>
    <h3 style={captionTitle}>{props.title}{props.name}</h3>
    {/* <img style={image} src={props.img} alt=""/> */}
    <img style={image} src={props.thumbnail} alt=""/>
  <div className="caption" style={caption}>
    <p>{props.summary}</p>
    <p>
      <a style = {buttons} className="btn btn-primary aniButton" role="button" onClick={props.clickSaveGame}>Save Game</a>
    </p>
  </div>
  </div>
</div>
);