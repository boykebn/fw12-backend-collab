const {
  readAllExperience,
  readExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controller/experiences.controller");

const experienceRouter = require("express").Router();

experienceRouter.get("/", readAllExperience);
experienceRouter.get("/:id", readExperience);
experienceRouter.post("/", createExperience);
experienceRouter.patch("/:id", updateExperience);
experienceRouter.delete("/:id", deleteExperience);

module.exports = experienceRouter;
