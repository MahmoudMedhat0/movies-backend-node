const User = require("../models/user-model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { username, password, email } = req.body;
  // const useremail = User.findOne({email})
  // !useremail._conditions.email && res.status(401).json("email already exists!");

  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(401).json("Wrong password or email !");
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  login,
  register,
};
