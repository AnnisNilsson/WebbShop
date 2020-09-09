const express = require('express');
const customersController = require('../controllers/customersController');

const routes = () => {
const customerRouter = express.Router();
const controller = customersController();
customerRouter.route('/Customers')
 .get(controller.get);
customerRouter.route('/Customers/:Id')
 .get(controller.get);
return customerRouter;
};



module.exports = routes;