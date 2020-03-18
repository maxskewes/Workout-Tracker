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

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });