module.exports = function(router){
    const cartController = require('../controllers/Cart.controller')

  router.get('/v1/cart/list', cartController.get_list)

  router.post('/v1/cart/detail', cartController.detail)

  router.post('/v1/cart/status', cartController.getCartByStatus)

  router.post('/v1/cart/get/order', cartController.get_order)

  router.post('/v1/cart/get/order/shipper', cartController.get_order_shipper)

  router.post('/v1/cart/get/turnover', cartController.get_turnover)

  router.post('/v1/cart/add',cartController.add)

  router.put('/v1/cart/update', cartController.update)

  router.put('/v1/cart/update/user', cartController.user_update_cart)

  router.put('/v1/cart/update/admin', cartController.admin_update_cart)

  router.put('/v1/cart/update/admin/status', cartController.admin_update_status)

  router.put('/v1/cart/update/shipper', cartController.shipper_update_cart)

  //router.put('/v1/cart/user/update/status', cartController.user_update_status)

  router.delete('/v1/cart/delete', cartController.delete)
}