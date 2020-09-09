const express = require('express');
const favoritesCountsController = require('../controllers/favoritesCountsController');

const routes = () => {
const favoriteCountRouter = express.Router();
const controller = favoritesCountsController();
favoriteCountRouter.route('/FavoritesCount')
 .get(controller.get);
favoriteRouter.route('/FavoritesCount/:Id')
 .get(controller.get);
return favoriteCountRouter;
};



module.exports = routes;