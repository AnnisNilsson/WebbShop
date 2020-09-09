const express = require('express');
const favoritesController = require('../controllers/favoritesController');

const routes = () => {
const favoriteRouter = express.Router();
const controller = favoritesController();
favoriteRouter.route('/Favorites')
 .get(controller.get);
favoriteRouter.route('/Favorites/:Id')
 .get(controller.get);
return favoriteRouter;
};



module.exports = routes;