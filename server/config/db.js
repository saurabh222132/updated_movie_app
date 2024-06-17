const mongoose = require("mongoose");
const TopRatedModel = require("../model/movieModel");
require("dotenv").config();

const DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (err) {
    console.log("Error occured in db connection");
  }
};

module.exports = DB;
