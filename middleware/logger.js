function log(req, res, next) {
  console.log("Logging all detailes of the request");
  next();
}

module.exports = log;
