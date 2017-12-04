import React from "react";
import IGNlogo from '../images/89002b9b-581c-4674-98c7-9db24155ee5f.png';
import GSlogo from '../images/gamespot.png';
import Polylogo from '../images/polygon-icon.png';

const iconStyle = {
  width: "30px",
}

const sitename = {
  color:"silver",
  fontFamily: "'Lora', serif",
} 

const centered = {

  alignItems: 'center'
}

const NewsTabs = props =>
  <ul className="nav nav-tabs subnav ">
    <li
      onClick={() => props.handleTab("IGN")}
      className={props.currentTab === "IGN" ? "active" : ""}
    >
      <a style={centered} onClick = {() => props.ignStuff()}> 
      <img className="IGNlogo" src={IGNlogo} alt={"IGN logo"} style={iconStyle}/>
      <p style={sitename}>IGN</p>

      </a>
    </li>
    <li
      onClick={() => props.handleTab("Polygon")}
      className={props.currentTab === "Polygon" ? "active" : ""}
    >
<<<<<<< HEAD
      <a style={centered} onClick = {() => props.polyStuff()}>
       <img className="Polylogo" src={Polylogo} alt={"Polygon logo"} style={iconStyle} />
        <p style={sitename}>Polygon</p>
=======
      <a onClick = {() => props.polyStuff()}>
      <img className="Polylogo" src={Polylogo} alt={"Polygon logo"} style={iconStyle} />

>>>>>>> 8e2181bb76655026ee17d84c71a2c0cabf0f9490
      </a>
    </li>
    <li
      onClick={() => props.handleTab("Gamespot")}
      className={props.currentTab === "Gamespot" ? "active" : ""}
    >
      <a onClick={() => props.gamespotStuff()}>
       <img className="GSlogo" src={GSlogo} alt={"Gamespot logo"} style={iconStyle}/>
       <p style={sitename}>Gamespot</p>
      </a>
    </li>
  </ul>

export default NewsTabs;



