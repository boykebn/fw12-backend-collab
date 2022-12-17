const routes = require("express").Router();

routes.use("/skills", require("./skills.router"));
routes.use("/company", require("./company.router"));
routes.use("/contacts", require("./contacts.router"));
routes.use("/experiences", require("./experiences.router"));
module.exports = routes;
