const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
config = require('./config');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("client/build"));
//app.use(cors());
app.use(routes);


mongoose.Promise = global.Promise;


mongoose.connect(
  config.database,
  {
  useMongoClient: true
}
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
