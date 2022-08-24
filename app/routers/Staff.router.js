module.exports = function(router){
    const staffController = require('../controllers/Staff.controller')

  router.get('/v1/staff/list', staffController.get_list)

  router.post('/v1/staff/detail', staffController.detail)

  router.post('/v1/staff/detail/tk', staffController.detailByTk)

  router.post('/v1/staff/check/use', staffController.checkStaffUse)

  router.post('/v1/staff/register',staffController.add)

  router.put('/v1/staff/update', staffController.update)

  router.put('/v1/staff/update2', staffController.update2)

  router.post('/v1/staff/delete', staffController.delete)

  router.post('/v1/staff/findPhone',staffController.getByPhone)

  router.post('/v1/staff/findEmail',staffController.getByEmail)

  router.post('/v1/staff/get/shipper', staffController.getShipper)
}