"use strict";

const express = require("express");
const bparser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// router
const home = require("./src/routes/home");

// app setting
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bparser.json());
app.use(bparser.urlencoded({extended: true}));

app.use("/", home);

module.exports = app;