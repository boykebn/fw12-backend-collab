const routes = require("express").Router();

routes.use("/users", require('./users.router'))
routes.use("/userSkill", require('./userSkills.router'))
routes.use("/skills", require('./skills.router'));
routes.use("/purpose", require('./purposes.router'));
routes.use("/resetPassword", require('./resetPassword.router'));
routes.use("/portofolio", require('./portofolio.router'));
routes.use("/company", require("./company.router"));
routes.use("/contacts", require("./contacts.router"));
routes.use("/experiences", require("./experiences.router"));

module.exports = routes;
