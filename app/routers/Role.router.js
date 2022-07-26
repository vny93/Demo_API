module.exports = function(router){
    const roleController = require('../controllers/Role.controller')

  router.get('/v1/role/list', roleController.get_list)

  router.get('/v1/role/detail', roleController.detail)

  router.post('/v1/role/register',roleController.add)

  router.put('/v1/role/update', roleController.update)

  router.delete('/v1/role/delete', roleController.delete)
}