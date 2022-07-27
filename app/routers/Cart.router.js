module.exports = function(router){
    const cartController = require('../controllers/Cart.controller')

  router.get('/v1/cart/list', cartController.get_list)

  router.get('/v1/cart/detail', cartController.detail)

  router.post('/v1/cart/status', cartController.getCartByStatus)

  router.post('/v1/cart/add',cartController.add)

  router.put('/v1/cart/update', cartController.update)

  router.delete('/v1/cart/delete', cartController.delete)
}