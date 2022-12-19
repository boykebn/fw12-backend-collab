const authRouter = require("express").Router();
const { check } = require("express-validator");

const {
  login,
  registerEmploye,
  registerRecruter,
  forgotPassword,
  resetPassword,
} = require("../controller/auth.controller");

authRouter.post("/login", login);

authRouter.post(
  "/register-employe",
  check("email", "Email invalid").isEmail(),
  check("phoneNumber", "Phone Number invalid").isMobilePhone("id-ID"),
  registerEmploye
);
authRouter.post(
  "/register-recruiter",
  check("email", "Email invalid").isEmail(),
  registerRecruter
);

authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
