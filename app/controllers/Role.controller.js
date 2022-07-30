const { response } = require('express')
var Role = require('../models/Role.model')

exports.get_list = function (req, res) {
    try {
        Role.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Role.getById(req.body.maquyen, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.FindRole = function (req, res) {
    Role.getByName(req.body.tenquyen, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Role.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Role.getById(req.body.maquyen, function (response) {
        if(response){
            Role.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.delete = function (req, res) {
    Role.getById(req.body.maquyen, function (response) {
        if(response){
            Role.remove(req.body.maquyen, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


