module.exports = function(router){
    const cartController = require('../controllers/Cart.controller')

  router.put('/v1/cart/user/update/status', cartController.user_update_status)

}