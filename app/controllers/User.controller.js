const { response } = require('express')
var User = require('../models/User.model')

exports.get_list = function (req, res) {
    try {
        User.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    User.getById(req.body.makh, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.getByPhone = function (req, res) {
    User.getByPhone(req.body.sdt, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.getByEmail = function (req, res) {
    User.getByEmail(req.body.email, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.detailByTk = function (req, res) {
    User.getByTk(req.body.tendangnhap, function (response) {
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
        hoten : req.body.hoten, 
        gioitinh : req.body.gioitinh,
        diachi : req.body.diachi,
        ngaysinh : req.body.ngaysinh,
        sdt : req.body.sdt,
        email : req.body.email,
        masothue : req.body.masothue,
        tendangnhap : req.body.tendangnhap
     }
    User.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    User.getById(req.body.makh, function (response) {
        if(response){
            User.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    User.getById(req.body.makh, function (response) {
        if(response){
            User.remove(req.body.makh, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


