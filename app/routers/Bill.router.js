module.exports = function(router){
    const billController = require('../controllers/Bill.controller')

  router.get('/v1/bill/list', billController.get_list)

  router.get('/v1/bill/detail', billController.detail)

  router.post('/v1/bill/add',billController.add)

  router.put('/v1/bill/update', billController.update)

  router.delete('/v1/bill/delete', billController.delete)
}