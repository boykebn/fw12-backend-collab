const { readAllResetPassword, readResetPasswordById, createResetPassword, UpdateResetPassword, deleteResetPassword } = require('../controller/resetPassword.controller');

const resetPasswordRouter = require('express').Router()

resetPasswordRouter.get('/', readAllResetPassword);
resetPasswordRouter.get('/:id', readResetPasswordById);
resetPasswordRouter.post('/', createResetPassword);
resetPasswordRouter.patch('/:id', UpdateResetPassword);
resetPasswordRouter.delete('/:id', deleteResetPassword);


module.exports = resetPasswordRouter;