import React from "react";

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
export const WebsiteItem = props => (
<div className = "col-md-4">
    
    <p><a className="btn btn-primary" style={buttons} role="button" href={props.url}>Go to Site</a></p>
</div>
);