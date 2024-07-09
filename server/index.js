const Express = require("express");
const app = Express();
const movieRouter = require("./routes/movieRoute");
const authRouter = require("./routes/auth");
const DB = require("./config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 8080;
const cors = require("cors");

app.use(
  cors({
    credentials: true,

    origin: [
      "http://localhost:3000",

      "https://updated-movie-app-frontend.vercel.app",
      "https://updated-movie-app-admin.vercel.app",
    ],
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Your server is live", success: true });
});

DB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use("/v1", movieRouter);
app.use("/v1", authRouter);

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});
