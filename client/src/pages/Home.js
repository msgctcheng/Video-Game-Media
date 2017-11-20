import React from "react";

const Home = () =>
  <div className ="body container">
    <h1>Home</h1>
    <div className="row">
      <div className="panel panel-default col-md-6">
        <div className="panel-heading">
        <h3 className="panel-title">Popular Games Carousel</h3>
        </div>

        <div className="panel-body">
        Some Popular Games should go here
        </div>
    </div>

      <div className="panel panel-default col-md-6">
        <div className="panel-heading">
        <h3 className="panel-title">Latest News Carousel</h3>
        </div>

        <div className="panel-body">
        Some Cool News should go here
        </div>
      </div>
    </div>
  </div>;

export default Home;