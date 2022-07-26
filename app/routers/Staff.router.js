module.exports = function(router){
    const staffController = require('../controllers/Staff.controller')

  router.get('/v1/staff/list', staffController.get_list)

  router.get('/v1/staff/detail', staffController.detail)

  router.post('/v1/staff/register',staffController.add)

  router.put('/v1/staff/update', staffController.update)

  router.put('/v1/staff/update2', staffController.update2)

  router.delete('/v1/staff/delete', staffController.delete)
}