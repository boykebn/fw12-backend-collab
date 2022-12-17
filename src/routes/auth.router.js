const authRouter = require("express").Router();
const { check } = require("express-validator");

const {
  login,
  registerEmploye,
  registerRecruter,
} = require("../controller/auth.controller");

authRouter.post("/login", login);

authRouter.post(
  "/register-employe",
  check("email", "Email invalid").isEmail(),
  check("phoneNumber", "Phone Number invalid").isMobilePhone("id-ID"),
  registerEmploye
);
authRouter.post(
  "/register-recruter",
  check("email", "Email invalid").isEmail(),
  check("phoneNumber", "Phone Number invalid").isMobilePhone("id-ID"),
  registerRecruter
);

module.exports = authRouter;
