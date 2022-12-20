const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
} = require("../controller/profile.controller");

profile.get("/:id", readProfile);
profile.get("/experiences", readExperience);
profile.get("/portofolio", readPortofolio);

module.exports = profile;
