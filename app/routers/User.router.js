module.exports = function(router){
    const userController = require('../controllers/User.controller')

  router.get('/v1/user/list', userController.get_list)

  router.post('/v1/user/detail', userController.detail)

  router.post('/v1/user/detail/tk', userController.detailByTk)

  router.post('/v1/user/register',userController.add)

  router.put('/v1/user/update', userController.update)

  router.delete('/v1/user/delete', userController.delete)
}