const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
  readProfileByToken,
  updateEmploye,
} = require("../controller/profile.controller");

const authMiddleware = require("../middleware/auth.middleware");

profile.get("/myAccount", authMiddleware, readProfileByToken);
profile.get("/experiences/:id", readExperience);
profile.get("/portofolio/:id", readPortofolio);
profile.get("/:id", readProfile);
profile.patch("/", authMiddleware, updateEmploye);

module.exports = profile;
