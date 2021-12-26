const { login, register } = require("../controllers/auth-controll");

const router = require("express").Router();

// REGISTER

router.post("/register", register);

//login

router.post("/login", login);
module.exports = router;
