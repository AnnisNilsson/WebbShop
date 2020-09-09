const express = require('express');
const brandsController = require('../controllers/brandsController');

const routes = () => {
const brandRouter = express.Router();
const controller = brandsController();
brandRouter.route('/Brands')
 .get(controller.get);
brandRouter.route('/Brands/:Id')
 .get(controller.get);
return brandRouter;
};



module.exports = routes;