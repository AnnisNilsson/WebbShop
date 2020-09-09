const express = require('express');
const cartProductsController = require('../controllers/cartProductsController');

const routes = () => {
const cartProductRouter = express.Router();
const controller = cartProductsController();
cartProductRouter.route('/CartProducts')
 .get(controller.get);
cartProductRouter.route('/CartProducts/:Id')
 .get(controller.get);
return cartProductRouter;
};



module.exports = routes;