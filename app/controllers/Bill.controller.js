const { response } = require('express')
var Bill = require('../models/Bill.model')

exports.get_list = function (req, res) {
    try {
        Bill.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Bill.getById(req.body.mahd, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Bill.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Bill.getById(req.body.mahd, function (response) {
        if(response){
            Bill.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.delete = function (req, res) {
    Bill.getById(req.body.mahd, function (response) {
        if(response){
            Bill.remove(req.body.mahd, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


