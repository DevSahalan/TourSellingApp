const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};
