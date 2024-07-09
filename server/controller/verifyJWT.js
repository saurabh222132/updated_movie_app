const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  //   const authHeader = req.headers.authorization || req.headers.Authorization;

  //   if (!authHeader?.startsWith("Bearer")) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  //   const token = authHeader.split(" ")[1];

  if (req.cookies) {
    const token = req.cookies.jwt;

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) res.status(403).json({ success: false, message: "Forbidded" });
      else {
        req.email = decoded.userInfo.email;
        req.name = decoded.userInfo.name;
        next();
      }
    });
  }
};

module.exports = { verifyJWT };
