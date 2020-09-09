const express = require('express');
const productsController = require('../controllers/productsController');

const routes = () => {
const productRouter = express.Router();
const controller = productsController();
productRouter.route('/Products')
 .get(controller.get);
productRouter.route('/Products/:Id')
 .get(controller.get);
return productsRouter;
};



module.exports = routes;