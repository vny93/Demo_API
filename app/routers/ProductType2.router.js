module.exports = function (router) {
  const productTypeController = require('../controllers/ProductType.controller')

  router.get('/v1/productType/list', productTypeController.get_list)

}