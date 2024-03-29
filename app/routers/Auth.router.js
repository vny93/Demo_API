module.exports = function (router) {
  const authController = require('../controllers/Auth.controller')
  const _AuthMiddleWare = require('../common/_AuthMiddleWare')

  //router.post('/register', authController.registerAccount)

  //get list tk
  router.get('/v1/auth/list', authController.get_list)

  //get tk by id
  router.get('/v1/auth/detail', authController.detail)

  //check
  router.post('/v1/auth/check', authController.check)

  //update tk
  router.put('/v1/auth/update/password', authController.update_password)

  //update status account
  router.put('/v1/auth/update/status', authController.update_statusAccount)

  //update role account
  router.put('/v1/auth/update/role', authController.update_role)

  //get status account
  router.post('/v1/auth/get/status', authController.get_status)

   //get role account
   router.post('/v1/auth/get/role', authController.get_role)

  //delete tk
  router.delete('/v1/auth/delete', authController.delete)

  // router.get('/v1/auth/logout',authController.logout)
}
