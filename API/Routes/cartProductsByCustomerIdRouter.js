const express = require('express');
const cartProductsByCustomerIdController = require('../controllers/cartProductsByCustomerIdController');

const routes = () => {
const cartProductsByCustomerIdRouter = express.Router();
const controller = cartProductsByCustomerIdController();
cartProductsByCustomerIdRouter.route('/CartProductsByCustomerId')
 .get(controller.get);
 cartProductsByCustomerIdRouter.route('/CartProductsByCustomerId/:Id')
 .get(controller.get);
return cartProductsByCustomerIdRouter;
};



module.exports = routes;