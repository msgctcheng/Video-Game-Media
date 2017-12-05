const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const expressValidator = require("express-validator");
//const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("client/build"));
//app.use(cors());
app.use(routes);

app.use(expressValidator());

app.use(session({
    secret: "7001337705p34k",
    saveUninitialized: false,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gameRally", 
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
