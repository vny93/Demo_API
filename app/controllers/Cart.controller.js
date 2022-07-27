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
       // magh : null,
        // ngaydat : null,
        // hotennguoinhan : null,
        // diachinguoinhan :null,
        // sdtnguoinhan : null,
        // emailnguoinhan : null,
        // ngaygiao : null,
        // tongtien : req.body.tongtien,
         trangthai : "",
        // manvduyet : null,
        // manvgiao : null,
        makh : req.body.makh
    }

    Cart.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.getCartByStatus = function (req, res) {
    Cart.getCartByStatus(req.body, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
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


