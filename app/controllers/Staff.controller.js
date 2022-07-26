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


exports.add = function (req, res) {
    Staff.create(req.body, function (response) {
        res.send({ result: response })
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


