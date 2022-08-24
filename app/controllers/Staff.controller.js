const { response } = require('express')
var Staff = require('../models/Staff.model')

exports.get_list = function (req, res) {
    try {
        Staff.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Staff.getById(req.body.manv, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.detailByTk = function (req, res) {
    Staff.getByTk(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Staff.create(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.getShipper = function (req, res) {
    Staff.getShipper(req.body.maquyen, function (response) {
        if(response){
            res.send({ result: response})
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.getByPhone = function (req, res) {
    Staff.getByPhone(req.body.sdt, function (response) {
        if(response){
            res.send({ result: response})
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.getByEmail = function (req, res) {
    Staff.getByEmail(req.body.email, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.checkStaffUse = function (req, res) {
    Staff.checkStaffUse(req.body.manv, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Staff.getById(req.body.manv, function (response) {
        if(response){
            Staff.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.update2 = function (req, res) {
    Staff.getById(req.body.manv, function (response) {
        if(response){
            Staff.update2(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.delete = function (req, res) {
    Staff.getById(req.body.manv, function (response) {
        if(response){
            Staff.remove(req.body.manv, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


