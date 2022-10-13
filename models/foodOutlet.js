const { Router } = require("express");
const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  rate: Number,
  description: String,
  location: String,
  imgUrl: String,
});
const Outlet = mongoose.model("Outlet", outletSchema);
module.exports = Outlet;
