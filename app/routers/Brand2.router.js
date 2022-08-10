module.exports = function(router){
    const brandController = require('../controllers/Brand.controller')

  router.post('/v1/brand/detail', brandController.detail)

  router.get('/v1/brand/list', brandController.get_list)

}