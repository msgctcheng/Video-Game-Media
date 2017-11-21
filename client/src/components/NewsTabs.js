import React from "react";

const NewsTabs = props =>
  <ul className="nav nav-tabs subnav ">
    <li
      onClick={() => props.handleTab("IGN")}
      className={props.currentTab === "IGN" ? "active" : ""}
    >
      <a>IGN</a>
    </li>
    <li
      onClick={() => props.handleTab("Polygon")}
      className={props.currentTab === "Polygon" ? "active" : ""}
    >
      <a>Polygon</a>
    </li>
    <li
      onClick={() => props.handleTab("Gamespot")}
      className={props.currentTab === "Gamespot" ? "active" : ""}
    >
      <a>Gamespot</a>
    </li>
  </ul>

export default NewsTabs;