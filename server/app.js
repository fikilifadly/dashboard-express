require("dotenv").config();

const express = require("express");
const router = require("./routers");
const errorHandler = require("./middlewares/ErrorHandler");

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

module.exports = app;
