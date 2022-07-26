module.exports = function(router){
    const providerController = require('../controllers/Provider.controller')

  router.get('/v1/provider/list', providerController.get_list)

  router.get('/v1/provider/detail', providerController.detail)

  router.post('/v1/provider/add',providerController.add)

  router.put('/v1/provider/update', providerController.update)

  router.delete('/v1/provider/delete', providerController.delete)
}