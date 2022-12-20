const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
} = require("../controller/profile.controller");

profile.get("/:id", readProfile);
profile.get("/experiences/:id", readExperience);
profile.get("/portofolio/:id", readPortofolio);

module.exports = profile;
