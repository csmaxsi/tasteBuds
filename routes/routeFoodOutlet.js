const express = require("express");
const Outlet = require("../models/foodOutlet");
const foods = require("../models/food");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Not all mandatory values are set");
  }

  let outlet = new Outlet({
    name: req.body.name,
    address: req.body.address,
    rate: req.body.rate,
    description: req.body.description,
    location: req.body.location,
    imgUrl: req.body.imgUrl,
  });
  try {
    await outlet.save();
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
  res.send(outlet);
});

router.get("/", async (req, res) => {
  try {
    let outlets = await Outlet.find();
    res.send(outlets);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
});

router.get("/:outletId", async (req, res) => {
  let reqId = req.params.outletId;

  try {
    let outlet = await Outlet.findById(reqId);
    res.send(outlet);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});

router.put("/:outletId", async (req, res) => {
  if (!req.body.name || !req.body.address || !req.body.imgUrl) {
    return res.status(400).send("Name is missing from the request");
  }
  try {
    let outlet = await Outlet.findById(req.params.outletId);
    outlet.set({
      name: req.body.name,
      address: req.body.address,
      rate: req.body.rate,
      description: req.body.description,
      location: req.body.location,
      imgUrl: req.body.imgUrl,
    });
    outlet = await outlet.save();
    res.send(outlet);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});

router.delete("/:outletId", async (req, res) => {
  try {
    let outlet = await Outlet.findOneAndDelete({ _id: req.params.outletId });
    res.send(outlet);
  } catch (err) {
    return res.status(404).send(`Not availbe this Id: ${err.message}`);
  }
});



module.exports = router;
