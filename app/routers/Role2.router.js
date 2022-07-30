module.exports = function(router){
    const roleController = require('../controllers/Role.controller')

    router.post('/v1/role/findId', roleController.FindRole)
}