const userRouter = require('express').Router()
const {readAllUsers, readUser, updateUser, createUser, deleteUser} = require('../controller/users.controller')

userRouter.get('/', readAllUsers)
userRouter.get('/:id', readUser)
userRouter.post('/', createUser)
userRouter.patch('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter