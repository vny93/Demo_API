const { response } = require('express')
var Brand = require('../models/Brand.model')

exports.get_list = function (req, res) {
    try {
        Brand.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Brand.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
        if(response){
            Brand.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
        if(response){
            Brand.remove(req.body.mahang, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


