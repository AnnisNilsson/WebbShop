const express = require('express');
const productImagesController = require('../controllers/productImagesController');

const routes = () => {
const productImageRouter = express.Router();
const controller = productImagesController();
productImageRouter.route('/ProductImages')
 .get(controller.get);
productImageRouter.route('/ProductImages/:Id')
 .get(controller.get);
return productImageRouter;
};



module.exports = routes;