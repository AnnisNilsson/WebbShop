const express = require('express');
const customersController = require('../Controllers/customersController');

const routes = () => {
    const customerRouter = express.Router();
    const controller = customersController();
    customerRouter.route('/Customers')
    .get(controller.get);
    customerRouter.route('/Customer/:Id')
    .get(controller.get);
    console.log(controller.result);
    return customerRouter;
};



module.exports = routes;