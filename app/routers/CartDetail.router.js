module.exports = function(router){
    const cartDetailController = require('../controllers/CartDetail.controller')

  router.get('/v1/cartDetail/list', cartDetailController.get_list)

  router.get('/v1/cartDetail/detail', cartDetailController.detail)

  router.get('/v1/cartDetail/detail/product', cartDetailController.detail_product)

  router.post('/v1/cartDetail/add',cartDetailController.add)

  router.put('/v1/cartDetail/update', cartDetailController.update)

  router.delete('/v1/cartDetail/delete', cartDetailController.delete)

  router.delete('/v1/cartDetail/delete/product', cartDetailController.deleteIdProduct)
}