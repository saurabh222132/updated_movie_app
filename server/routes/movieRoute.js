const Express = require("express");
const MovieController = require("../controller/movielist");

const router = Express.Router();

router.post("/movielist", MovieController);

module.exports = router;
