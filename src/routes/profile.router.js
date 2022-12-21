const profile = require("express").Router();

const {
  readProfile,
  readExperience,
  readPortofolio,
  readProfileByToken,
  updateEmploye,
  readSkillsByToken,
  updateProfilePicture,
} = require("../controller/profile.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { updateSkills } = require("../controller/profile.controller");
const uploadMiddleware = require("../middleware/upload.middleware");

profile.get("/myAccount", authMiddleware, readProfileByToken);
profile.get("/experiences/:id", readExperience);
profile.get("/portofolio/:id", readPortofolio);
profile.get("/skills", authMiddleware, readSkillsByToken);
profile.get("/:id", readProfile);
profile.patch("/", authMiddleware, updateEmploye);
profile.post("/skills", authMiddleware, updateSkills);
profile.patch(
  "/uploads",
  authMiddleware,
  uploadMiddleware,
  updateProfilePicture
);

module.exports = profile;
