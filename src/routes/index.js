const routes = require('express').Router()

routes.use("/skills", require('./skills.router'))
routes.use("/purpose", require('./purposes.router'))
routes.use("/resetPassword", require('./resetPassword.router'))
routes.use("/portofolio", require('./portofolio.router'))

module.exports = routes;