module.exports = function(router){
    const authController = require('../controllers/Auth.controller')

        //add tk
        router.post('/v1/auth/register',authController.add)

        //login
        router.post('/v1/auth/login',authController.login)

        router.post('/v1/auth/cookie',authController.cookie)

        router.post('/v1/auth/FindAccount', authController.finAccount)
}