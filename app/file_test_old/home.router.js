module.exports = function(router){
    var homeController = require('../controllers/home.controller')

    router.get('/',homeController.home)

    router.get('/about',homeController.about)
//-----------------------------------------------
    var JWT = require("../common/_JWT")

    router.get("/login", async function(req,res){
        //check thông tin user
        var user = {
            name: "Admin",
            email :"admin@gmail.com"
        }
        const _token = await JWT.make(user)
        res.send({token: _token})
    })

    router.get("/token/check", async function(req,res){
        try{
            var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5A"+
            "Z21haWwuY29tIn0sImlhdCI6MTY1ODMxMDE2MiwiZXhwIjoxNjU4MzEzNzYyfQ.BKo2byZH9x8AC4oArSwSqGxIFDmeS1rr6CdbwI6GR6g"
            const data = await JWT.check(_token)
            res.send({result: data})
        }catch(err){
            res.send({result: "Mã token không hợp lệ"})
        }
    })

}