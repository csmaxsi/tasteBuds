const express = require("express");
const mongoose = require("mongoose");
const outletRouter = require("./routes/routeFoodOutlet");
const foodRouter = require("./routes/routeFood");
const authencator = require("./middleware/authenticator");
const logger = require("./middleware/logger");
const app = express();
const PORT = 4200;

mongoose
  .connect("mongodb+srv://DbUser:DbUser@cluster0.fj0x6.mongodb.net/Cluster0?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to DB succsessfully!");
  })
  .catch((err) => console.log(`Error has occured: ${err}`));

//allowing cors requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use(authencator);
app.use(logger);
app.use("/api/outlets", outletRouter)
app.use("/api/foods", foodRouter)




app.listen(PORT, () => {
  console.log(`Successfully running on Port ${PORT}`);
});
