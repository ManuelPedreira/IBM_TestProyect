const jwt = require("jsonwebtoken");
const myTokenSecret = "mysecret";

const authenticate = (req, res, next) => {
  if (req.session.authorization) {
    // Get the authorization object stored in the session
    token = req.session.authorization["accessToken"]; // Retrieve the token from authorization object
    jwt.verify(token, myTokenSecret, (err, user) => {
      // Use JWT to verify token
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
};

module.exports = {authenticate}