module.exports = function (router) {
  const productController = require('../controllers/Product.controller')

  router.get('/v1/product/open_image', productController.open_image)

  router.post('/v1/product/list_fk', productController.get_list_fk)

  router.get('/v1/product/list/discount', productController.getDiscount)

  router.get('/v1/product/list/isnew', productController.getIsNew)

  router.get('/v1/product/list/isgood', productController.getIsGood)

  router.post('/v1/product/detail', productController.detail)

}