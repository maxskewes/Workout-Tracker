const express = require("express");
const mongoose = require("mongoose");
const log = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(log("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect('mongodb://heroku_l46wnt3l:lvs48de2pj5tg2a4a249fa764e@ds247648.mlab.com:47648/heroku_l46wnt3l', {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });