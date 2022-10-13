const express = require("express");
const Food = require("../models/food");
const Outlet = require("../models/food");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.outletId) {
    return res.status(400).send("Not all mandatory values are set");
  }

  let food = new Food({
    name: req.body.name,
    type: req.body.type,
    rate: req.body.rate,
    description: req.body.description,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    outletId: req.body.outletId,
  });
  try {
    await food.save();
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
  res.send(food);
});

router.get("/", async (req, res) => {
  try {
    let foods = await Food.find();
    res.send(foods);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
});

router.get("/:foodId", async (req, res) => {
  let reqId = req.params.foodId;

  try {
    let food = await Food.findById(reqId);
    res.send(food);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});

router.put("/:foodId", async (req, res) => {
  if (!req.body.name || !req.body.type || !req.body.imgUrl) {
    return res.status(400).send("Name is missing from the request");
  }
  try {
    let food = await Food.findById(req.params.foodId);
    food.set({
      name: req.body.name,
      type: req.body.type,
      imgUrl: req.body.imgUrl,
    });
    food = await food.save();
    res.send(food);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});

router.delete("/:foodId", async (req, res) => {
  try {
    let food = await Food.findOneAndDelete({ _id: req.params.foodId });
    res.send(food);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});


module.exports = router;
