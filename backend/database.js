const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/Notebook";

const connectmongp = () => {
  mongoose.connect(mongoURL);
  console.log("Connected succes");
};
module.exports = connectmongp;
