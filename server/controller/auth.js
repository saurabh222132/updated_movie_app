const User = require("../model/userModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  console.log(req.body);
  const foundUser = await User.findOne({ email: req.body.email });
  console.log("Found user ", foundUser);
  if (foundUser) {
    res.status(201).send({ message: "User already exists!" });
    res.end();
  } else {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    req.body["password"] = hashedPassword;

    const user = new User(req.body);

    try {
      const doc = await user.save();

      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

exports.login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(404).json({ message: "email and password not found." });
    }
    const user = await User.findOne({ email: email });
    console.log("This is user in login section", user);
    if (!user) {
      res.status(404).send({ message: "Invalid credentials" });
      return;
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result === true) {
        // generating access token
        const accessToken = jwt.sign(
          { userInfo: { _id: user._id, email: user.email } },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "14d" }
        );

        res.cookie("jwt", accessToken, {
          withCredentials: true,
          secure: true,
          sameSite: "none",
          httpOnly: true, // accessible only by browser
          maxAge: 14 * 24 * 60 * 60 * 1000, //after 14  day cookie will authometically deleted from the browser
        });
        user.password = undefined;
        res.status(200).send({ user: user });
      } else {
        res.status(401).json({ message: "invalid credential!" });
      }
    });
  } catch (err) {
    res.status(401).json({ message: "invalid credential!" });
  }
};

exports.checkAuth = async (req, res) => {
  console.log(req.email);
  const doc = await User.findOne({ email: req.email });
  doc.password = undefined;
  res.status(200).json({ success: true, user: doc });
};
