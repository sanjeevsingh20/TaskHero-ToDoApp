const express = require("express");
const config = require("../config/confidentila");
const jwt = require("jsonwebtoken");

const getuset = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send({ error: "Authenticate Yourself" });
  } else {
    try {
      const data = jwt.verify(token, config.secret_key);
      req.User = data.user;
    } catch (error) {
      console.log({ error: error });
    }
  }
  next();
};

module.exports = getuset;
