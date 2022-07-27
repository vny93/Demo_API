module.exports = function(router){
    const productController = require('../controllers/Product.controller')

  router.post('/v1/product/list_fk', productController.get_list_fk)
  
  router.post('/v1/product/detail', productController.detail)

}