import React from "react";

export const WebsiteItem = (props) => {
    let title = "";    
   if(props.category === 1) {
        title = "Official"
    } else if(props.category === 2) {
        title = "Wikia"
    } else if(props.category === 3) {
        title = "Wikipedia"
    } else if(props.category === 4) {
        title = "Facebook"
    } else if(props.category === 5) {
        title = "Twitter"
    } else if(props.category === 6) {
        title = "Twitch"
    } else if(props.category === 8) {
        title = "Instagram"
    } else if(props.category === 9) {
        title = "YouTube"
    } else if(props.category === 10) {
        title = "iPhone"
    } else if(props.category === 11) {
        title = "iPad"
    } else if(props.category === 12) {
        title = "Android"
    } else if(props.category === 13) {
        title = "Steam"
    }
    return (
    <div>
        <p><a className="btn btn-primary" role="button" href={props.url}>{title}</a></p>
    </div>
 );
}