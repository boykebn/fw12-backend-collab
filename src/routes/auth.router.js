const authRouter = require("express").Router();
const { check } = require("express-validator");

const {
  registerEmploye,
  registerRecruter,
  forgotPassword,
  resetPassword,
  loginEmploye,
  loginRecruiter,
} = require("../controller/auth.controller");

authRouter.post("/login-employe", loginEmploye);
authRouter.post("/login-recruiter", loginRecruiter);

authRouter.post(
  "/register-employe",
  check("email", "Email invalid").isEmail(),
  check("phoneNumber", "Phone Number invalid").isMobilePhone("id-ID"),
  registerEmploye
);
authRouter.post(
  "/register-recruiter",
  check("email", "Email invalid").isEmail(),
  check("phoneNumber", "Phone Number invalid").isMobilePhone("id-ID"),
  registerRecruter
);

authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
