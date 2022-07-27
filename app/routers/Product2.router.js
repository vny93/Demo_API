module.exports = function (router) {
  const productController = require('../controllers/Product.controller')

  router.get('/v1/product/open_image', productController.open_image)

  router.post('/v1/product/list_fk', productController.get_list_fk)

  router.post('/v1/product/detail', productController.detail)

}