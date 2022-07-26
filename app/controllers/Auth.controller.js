const { response } = require('express')
var Auth = require('../models/Auth.model')
const jwt = require("jsonwebtoken")
const _APP = require("../common/_APP")
var JWT = require("../common/_JWT")
const brcypt = require('bcrypt') //mã hóa password
const _AuthMiddleWare = require('../common/_AuthMiddleWare')
// const Account = require('../models/account.model')

// const authController = {
//     //register
//     registerAccount : async (req, res) => {
//         try{
//             // db.query("insert into taikhoan set ?", req.body)
//             // res.status(200).json(req.body)
//             const newAccount = await new Account({
//                 tendangnhap : req.body.tendangnhap,
//                 matkhau: req.body.matkhau,
//                 maquyen : req.body.maquyen
//             })
//             //save to DB
//             const account = await newAccount.save()
//             res.status(200).json(account)
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
// }
// module.exports = authController

//get list tk
exports.get_list = function (req, res) {
    try {
        Auth.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//get tk by id
exports.detail = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//add tk
exports.add = function (req, res) {
    Auth.create(req.body, function (response) {
        res.send({ result: response })
    })
}

//update password
exports.update_password = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if(response){
            Auth.updateMK(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//update status
exports.update_statusAccount = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if(response){
            Auth.updateStatus(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//xóa tk
exports.delete = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if(response){
            Auth.removeTK(req.body.tendangnhap, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


//check login
exports.login = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if (response) {
            Auth.check_login(req.body, async function (response) {
                if (response) {
                    const accessToken = await JWT.make(response)
                    res.send({ accessToken: accessToken})
                    // const accessToken = JWT.makeAccessToken(response)
                    // jwt.sign({
                    //     id: response.tendangnhap
                    // }, _APP.ACCESS_TOKEN,{
                    //     expiresIn: "30s"
                    // })

                    // const refreshToken = JWT.makeRefreshToken(response)
                    // jwt.sign({
                    //     id: response.tendangnhap
                    // }, _APP.REFRESH_TOKEN,{
                    //     expiresIn: _APP.TOKEN_TIME_LIFE
                    // })
                    // res.cookie("accessToken",accessToken,{
                    //     httpOnly:true,
                    //     path:"/",
                    //     sameSite: "strict"
                    // })
                    // res.set('accessToken', accessToken)
                    // const{matkhau, ...others} = response //trả về thông tin và kh cho trả về mật khẩu
                    // return res.status(200).json({...others,accessToken})//kh muốn trả về thông tin thì bỏ cái ...others ra
                }
                else {
                    return res.status(401).json("Not find")
                }

            })
        }
        else return res.status(401).json("Not find")
    })

}

exports.cookie = function (req, res) {
    var cookie = req.cookies.accessToken
    var _token = req.headers.authorization
    return res.send({ result: cookie, token: _token })
}

//const redis = require("redis");
//var JWTR = require("jwt-redis").default
//var redisClient = redis.createClient();
// redisClient.on("connect", function () {
//     console.log("Redis plugged in.");
// });
//var jwtr = new JWTR(redisClient);
//exports.logout = function (req, res) {
    //req: tham số header do ng dùng truyền, res: để trả về DL cho ng dùng, next: được phép đi tiếp hay kh
//    var _token = req.headers.authorization
//    console.log("token: "+_token)
    //jwtr.destroy(_token)
//}
