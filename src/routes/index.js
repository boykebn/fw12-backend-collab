const routes = require('express').Router()

routes.use('/skills', require('./skills.router'))

module.exports = routes