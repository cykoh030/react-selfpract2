// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan("tiny"));

// Routes
app.get("/api", (req, res) => {
  const data = {
    loginID: "test",
    password: "testes",
  };
  res.json(data);
});

app.get("/api/test1", (req, res) => {
  const data = {
    loginID: "test2",
    password: "testes3",
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
