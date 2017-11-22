import React from "react";
import dog from '../images/Dog01.gif';
import cat from '../images/Lcd5aX5xi.png';

const iconStyle={
  width: "100px"
}

const panels = {
  backgroundImage: "linear-gradient(black, #0092CA)",
  color:"white"

}

const Home = () =>
  <div className ="body container">
    <h1>Home</h1>
    <div className="row">
      <div style={panels} className="panel col-md-5">
        <div className="panel-heading">
        <h3 className="panel-title">Popular Games list</h3>
        </div>

        <div  className="panel-body">
        Some Popular Games should go here

        <img className="dog" src={dog} alt={"dog"} style={iconStyle}/>

        </div>
    </div>

      <div style={panels}  className="panel  col-md-5">
        <div className="panel-heading">
        <h3 className="panel-title">Latest News list</h3>
        </div>

        <div className="panel-body">
        Some Cool News should go here
        <img className="cat" src={cat} alt={"cat"} style={iconStyle}/>

        </div>
      </div>
    </div>
  </div>;

export default Home;