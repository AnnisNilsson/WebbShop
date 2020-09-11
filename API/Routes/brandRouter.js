const express = require('express');
const brandsController = require('../Controllers/brandsController');

const routes = () => {
    const brandRouter = express.Router();
    const controller = brandsController();
    brandRouter.route('/Brands/:Id')
    .get(controller.get);
    brandRouter.route('/Brands')
    .get(controller.get);
    return brandRouter;
};

module.exports = routes;