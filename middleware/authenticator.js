function authenticate(req, res, next) {
    console.log("authencating the user ...");
    next();
  }
  
  module.exports = authenticate;
  