const portofolioRouter = require('express').Router()

const { readAllPortofolio, readPortofolioById, createPortofolio, UpdatePortofolio, deletePortofolio } = require('../controller/portofolio.controller');


portofolioRouter.get('/', readAllPortofolio);
portofolioRouter.get('/:id', readPortofolioById);
portofolioRouter.post('/', createPortofolio);
portofolioRouter.patch('/:id', UpdatePortofolio);
portofolioRouter.delete('/:id', deletePortofolio);


module.exports = portofolioRouter;