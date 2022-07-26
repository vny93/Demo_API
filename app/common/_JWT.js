const jwt = require("jsonwebtoken")
const { TOKEN_TIME_LIFE } = require("./_APP")
const _APP = require("./_APP")

// make => tạo mã token 
let make = function(auth){
    return new Promise(function(resolve, reject){ //resolve: thành công, reject: lổi
        jwt.sign({
            id:auth.tendangnhap
        }, _APP.ACCESS_TOKEN, {
            //algorithm: "HS256",
            expiresIn: _APP.TOKEN_TIME_LIFE
        },function(err, _token){
            if(err){
                return reject(err)
            }
            return resolve(_token)
        })
    })
}

let makeAccessToken = function(response){
    return jwt.sign({
        id: response.tendangnhap
    }, _APP.ACCESS_TOKEN,{
        expiresIn: "30d"
    })
}

let makeRefreshToken = function(response){
    return jwt.sign({
        id: response.tendangnhap
    }, _APP.ACCESS_TOKEN,{
        expiresIn: "30d"
    })
}

//check => xác thực mã đúng, sai, hết hạn
let check = function(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, _APP.ACCESS_TOKEN, function(err,req){
            if(err){
                return reject(err)
            }
            return resolve(req)
        } )
    })
}

let check2 = function(cookie,_token){
    return new Promise((resolve, reject) => {
        jwt.verify(cookie,_token, function(err,req){
            if(err){
                return reject(err)
            }
            return resolve(req)
        } )
    })
}



module.exports = { //phải exports thì bên chỗ khác mới gọi đc, kiểu như public với private
    make : make,
    makeAccessToken : makeAccessToken,
    makeRefreshToken : makeRefreshToken,
    check : check,
    check2 : check2
}