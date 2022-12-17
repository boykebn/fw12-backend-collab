const authRouter = require('express').Router()
const { login } = require('../controller/auth.controller')

authRouter.post('/login', login)

module.exports = authRouter