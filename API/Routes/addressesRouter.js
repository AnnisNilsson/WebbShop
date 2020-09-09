const express = require('express');
const addressesController = require('../controllers/addressesController');

const routes = () => {
const addressRouter = express.Router();
const controller = addressesController();
addressRouter.route('/Adresses')
 .get(controller.get);
addressRouter.route('/Adresses/:Id')
 .get(controller.get);
return addressRouter;
};



module.exports = routes;