const userRouter = require('express').Router()
const {readAllUsers, readUser, readUsersBySkill, readCompanyByUserId, updateUser, createUser, deleteUser} = require('../controller/users.controller')

userRouter.get('/', readAllUsers)
userRouter.get('/skill', readUsersBySkill)
userRouter.get('/:id', readUser)
userRouter.get('/company/:id', readCompanyByUserId)
userRouter.post('/', createUser)
userRouter.patch('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter