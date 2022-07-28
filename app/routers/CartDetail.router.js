module.exports = function(router){
    const cartDetailController = require('../controllers/CartDetail.controller')

  router.get('/v1/cartDetail/list', cartDetailController.get_list)

  router.post('/v1/cartDetail/detail', cartDetailController.detail)

  router.post('/v1/cartDetail/detail2', cartDetailController.detail2)

  router.get('/v1/cartDetail/detail/product', cartDetailController.detail_product)

  router.post('/v1/cartDetail/add',cartDetailController.add)

  router.put('/v1/cartDetail/update', cartDetailController.update)

  router.put('/v1/cartDetail/update/detail', cartDetailController.updateDetail)

  router.delete('/v1/cartDetail/delete', cartDetailController.delete)

  router.delete('/v1/cartDetail/delete/product', cartDetailController.deleteIdProduct)
}