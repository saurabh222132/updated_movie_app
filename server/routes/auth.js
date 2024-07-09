const Express = require("express");
const { register, checkAuth } = require("../controller/auth");
const { login } = require("../controller/auth");
const { verifyJWT } = require("../controller/verifyJWT");

const Router = Express.Router();

Router.post("/register", register)
  .post("/login", login)
  .get("/checkauth", verifyJWT, checkAuth)
  .get("/logout", (req, res) => {
    res.clearCookie("jwt");
    res.send({ message: "User logged Out", success: true });
  });

module.exports = Router;
