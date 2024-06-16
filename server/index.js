const Express = require("express");
const app = Express();
const movieRouter = require("./routes/movieRoute");
const DB = require("./config/db");
const bodyParser = require("body-parser");
const port = 8080;
const cors = require("cors");

app.use(
  cors({
    credentials: true,

    origin: [
      "https://main--shoppinghub12.netlify.app",
      "https://ecommerce-frontend-testing-server.onrender.com",
      "http://localhost:3000",
      "https://shoppinghub12.netlify.app",
    ],
  })
);

DB();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/v1", movieRouter);

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});
