const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
  readProfileByToken,
  updateEmploye,
} = require("../controller/profile.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { updateSkills } = require("../controller/profile.controller");

profile.get("/myAccount", authMiddleware, readProfileByToken);
profile.get("/experiences/:id", readExperience);
profile.get("/portofolio/:id", readPortofolio);
profile.get("/:id", readProfile);
profile.patch("/", authMiddleware, updateEmploye);
profile.post("/skills", authMiddleware, updateSkills);

module.exports = profile;
