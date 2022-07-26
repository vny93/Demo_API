var _JWT = require('../common/_JWT')
let isAuth = async function(req,res,next){
    //req: tham số header do ng dùng truyền, res: để trả về DL cho ng dùng, next: được phép đi tiếp hay kh
    var _token = req.headers.authorization
    if(_token){
        try{
            var authData = await _JWT.check(_token) //await: chờ xử lý lần lượt các tác vụ
            req.auth = authData
            next()
        }catch(err){
            return res.send({data: "Mã token không hợp lệ"})
        }
    }else{
        return res.send({data: "Bạn chưa gửi kèm mã token"})
    }
}

let isAuth2 = async function(req,res,next){
    //req: tham số header do ng dùng truyền, res: để trả về DL cho ng dùng, next: được phép đi tiếp hay kh
   var cookie = req.cookies.accessToken
   var _token = req.headers.authorization
    if(_token){
        try{
            var authData = await _JWT.check(_token) //await: chờ xử lý lần lượt các tác vụ
            if(cookie == _token){
                next()
            }else{
                return res.send({data: "Mã token không hợp lệ"})
            }
        }catch(err){
            return res.send({data: "Mã token không hợp lệ"})
        }
    }else{
        return res.send({data: "Bạn chưa gửi kèm mã token"})
    }
}

module.exports = {
    isAuth : isAuth,
    isAuth2 : isAuth2
}