const { response } = require('express')
var Provider = require('../models/Provider.model')

exports.get_list = function (req, res) {
    try {
        Provider.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Provider.getById(req.body.manhacc, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Provider.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Provider.getById(req.body.manhacc, function (response) {
        if(response){
            Provider.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    Provider.getById(req.body.manhacc, function (response) {
        if(response){
            Provider.remove(req.body.manhacc, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


