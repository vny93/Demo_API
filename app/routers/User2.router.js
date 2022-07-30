module.exports = function(router){
    const userController = require('../controllers/User.controller')

  router.post('/v1/user/register',userController.add)

  router.post('/v1/user/findPhone',userController.getByPhone)

  router.post('/v1/user/findEmail',userController.getByEmail)

}