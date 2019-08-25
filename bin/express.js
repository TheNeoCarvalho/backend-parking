const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://week6:week6@cluster0-pvlax.mongodb.net/parking?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
module.exports = app;
