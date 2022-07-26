const { response } = require('express')
var Cart = require('../models/Cart.model')

exports.get_list = function (req, res) {
    try {
        Cart.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    var data = {
        //magh : req.body.magh,
        ngaydat : req.body.ngaydat,
        hotennguoinhan : req.body.hotennguoinhan,
        diachinguoinhan :req.body.diachinguoinhan,
        sdtnguoinhan : req.body.sdtnguoinhan,
        emailnguoinhan : req.body.emailnguoinhan,
        ngaygiao : null,
        tongtien : req.body.tongtien,
        trangthai : "Chờ xác nhận",
        manvduyet : null,
        manvgiao : null,
        makh : req.body.makh
    }
   /* console.log("magh: "+data.magh)
    console.log("ngay: "+data.ngaydat)
    console.log("hotennguoinhan: "+data.hotennguoinhan)
    console.log("diachinguoinhan: "+data.diachinguoinhan)
    console.log("sdtnguoinhan: "+data.sdtnguoinhan)
    console.log("emailnguoinhan: "+data.emailnguoinhan)
    console.log("ngaygiao: "+data.ngaygiao)
    console.log("tongtien: "+data.tongtien)
    console.log("trangthai: "+data.trangthai)
    console.log("manvduyet: "+data.manvduyet)
    console.log("manvgiao: "+data.manvgiao)
    console.log("makh: "+data.makh)*/
    Cart.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if(response){
            Cart.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if(response){
            Cart.remove(req.body.magh, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


