const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
  readProfileByToken,
} = require("../controller/profile.controller");

const authMiddleware = require("../middleware/auth.middleware");

profile.get("/myAccount", authMiddleware, readProfileByToken);
profile.get("/:id", readProfile);
profile.get("/experiences/:id", readExperience);
profile.get("/portofolio/:id", readPortofolio);

module.exports = profile;
