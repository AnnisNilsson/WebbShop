const express = require('express');
const ordersController = require('../controllers/ordersController');

const routes = () => {
const orderRouter = express.Router();
const controller = ordersController();
orderRouter.route('/Orders')
 .get(controller.get);
orderRouter.route('/Orders/:Id')
 .get(controller.get);
return orderRouter;
};



module.exports = routes;