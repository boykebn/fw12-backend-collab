const purposeRouter = require('express').Router()

const { readAllPurpose, readPurposeById, createPurpose, UpdatePurpose, deletePurpose } = require('../controller/purposes.controller');

purposeRouter.get('/', readAllPurpose);
purposeRouter.get('/:id', readPurposeById);
purposeRouter.post('/', createPurpose);
purposeRouter.patch('/:id', UpdatePurpose);
purposeRouter.delete('/:id', deletePurpose);


module.exports = purposeRouter;