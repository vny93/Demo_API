const { response } = require('express')
var CartDetail = require('../models/CartDetail.model')

exports.get_list = function (req, res) {
    try {
        CartDetail.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    CartDetail.getById(req.body.magh, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.detail_product = function (req, res) {
    CartDetail.getByIdProduct(req.body, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    console.log("magh: "+req.body.magh)
    CartDetail.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    CartDetail.getByIdProduct(req.body, function (response) {
        if(response){
            CartDetail.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    CartDetail.getById(req.body.magh, function (response) {
        if(response){
            CartDetail.remove(req.body.magh, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.deleteIdProduct = function (req, res) {
    CartDetail.getByIdProduct(req.body, function (response) {
        if(response){
            CartDetail.removeIdProduct(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


