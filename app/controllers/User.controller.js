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


exports.add = function (req, res) {
    User.create(req.body, function (response) {
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


