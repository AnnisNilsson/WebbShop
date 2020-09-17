let __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const expressRouter = require('express');
const crud = require('../Controllers/crudController');
function routes() {
  const router = expressRouter.Router();
  const controller = crud();
  const query = (sp) => {
    return function (req, res) {
      return __awaiter(this, void 0, void 0, function* () {
        req.sql = { sp };
        yield controller.crud(req, res);
      });
    };
  };

  /*BASICCARTPRODUCTS*/
  router
  .route('/basicCart')
  .get(query('GetBasicCart'));

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

      /*FAVORITESCOUNT*/
  router
  .route('/favorites/:Id')
  .get(query('GetFavoritesCount'))

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
