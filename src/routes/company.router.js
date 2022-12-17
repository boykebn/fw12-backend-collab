const {
  readAllCompany,
  readCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controller/company.controller");

const companyRouter = require("express").Router();

companyRouter.get("/", readAllCompany);
companyRouter.get("/:id", readCompany);
companyRouter.post("/", createCompany);
companyRouter.patch("/:id", updateCompany);
companyRouter.delete("/:id", deleteCompany);

module.exports = companyRouter;
