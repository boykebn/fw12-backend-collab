const routes = require("express").Router();

routes.use("/skills", require("./skills.router"));
routes.use("/company", require("./company.router"));
routes.use("/contacts", require("./contacts.router"));
module.exports = routes;
