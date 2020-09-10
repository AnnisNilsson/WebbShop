const express = require('express');
const ordersByCustomerIdsController = require('../controllers/ordersByCustomerIdsController');

const routes = () => {
const ordersByCustomerIdRouter = express.Router();
const controller = ordersByCustomerIdsController();
ordersByCustomerIdRouter.route('/OrdersByCustomerId')
 .get(controller.get);
ordersByCustomerIdRouter.route('/OrdersByCustomerId/:Id')
 .get(controller.get);
return ordersByCustomerIdRouter;
};



module.exports = routes;