module.exports = function(router){
    const brandController = require('../controllers/Brand.controller')

  router.get('/v1/brand/list', brandController.get_list)

  router.get('/v1/brand/detail', brandController.detail)

  router.post('/v1/brand/add',brandController.add)

  router.put('/v1/brand/update', brandController.update)

  router.delete('/v1/brand/delete', brandController.delete)
}