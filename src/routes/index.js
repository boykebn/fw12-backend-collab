const routes = require("express").Router();

routes.use("/skills", require("./skills.router"));
routes.use("/company", require("./company.router"));
module.exports = routes;
