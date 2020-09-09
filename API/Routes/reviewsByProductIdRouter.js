const express = require('express');
const reviewsByProductIdController = require('../controllers/reviewsByProductIdController');

const routes = () => {
const reviewsByProductIdRouter = express.Router();
const controller = reviewsByProductIdController();
reviewsByProductIdRouter.route('/ReviewsByProductId')
 .get(controller.get);
 reviewsByProductIdRouter.route('/ReviewsByProductId/:Id')
 .get(controller.get);
return reviewsByProductIdRouter;
};



module.exports = routes;