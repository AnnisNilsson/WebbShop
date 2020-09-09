const express = require('express');
const basicCartsController = require('../controllers/basicCartsController');

const routes = () => {
const basicCartRouter = express.Router();
const controller = basicCartsController();
basicCartRouter.route('/BasicCart')
 .get(controller.get);
basicCartRouter.route('/BasicCart/:Id')
 .get(controller.get);
return basicCartRouter;
};



module.exports = routes;