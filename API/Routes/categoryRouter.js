const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const routes = () => {
const categoryRouter = express.Router();
const controller = categoriesController();
categoryRouter.route('/Categories')
 .get(controller.get);
categoryRouter.route('/Categories/:Id')
 .get(controller.get);
return categoryRouter;
};



module.exports = routes;