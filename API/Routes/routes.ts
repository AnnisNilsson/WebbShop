const expressRouter = require('express');
const crud = require('../controllers/crudController');

function routes() {
  const router = expressRouter.Router();
  const controller = crud();

  const query = (sp: string) => {
    return async function (req: any, res: any) {
      req.sql = { sp };
      await controller.crud(req, res);
    };
  };
  /*CARTPRODUCTS*/
  router
    .route('/cartProducts/:Id')
    .get(query('GetCartProducts'))
    .post(query('AddCartProduct'))
    .put(query('UpdateCartProduct'))
    .delete(query('DeleteCartProduct'));

  /*FAVORITES*/
  router
    .route('/favorites/:Id')
    .get(query('GetFavorites'))
    .post(query('AddFavorite'))
    .put(query('UpdateFavorite'))
    .put(query('ChangeFavorite'))
    .delete(query('DeleteFavorite'));

  /*CATEGORIES*/
  router.route('/categories').get(query('GetCategories'));

  router.route('/categories/:Id').get(query('GetCategory'));

  /*CUSTOMER*/
  router.route('/customers').get(query('GetCustomers'));

  router.route('/customers/:Id').get(query('GetCustomer'));

  /*PRODUCT*/
  router.route('/products').get(query('GetProducts'));

  router.route('/products/:Id').get(query('GetProduct'));

  /*REVIEW*/
  router.route('/reviews/:Id').get(query('GetReviewsByProductId'));

  /*SEARCH*/
  router.route('/searchProducts').get(query('SearchProducts'));

  router.route('/seachProducts/:Id').get(query('SearchProducts'));

  return router;
}

module.exports = routes;
