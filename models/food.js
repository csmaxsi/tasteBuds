const { Router } = require("express");
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  description: String,
  category: String,
  price: Number,
  imgUrl: String,
  outletId:String,
});
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
