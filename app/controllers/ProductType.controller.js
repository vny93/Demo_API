const { response } = require('express')
var ProductType = require('../models/ProductType.model')

exports.get_list = function (req, res) {
    try {
        ProductType.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    ProductType.getById(req.body.maloaisp, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    var imageUrl = null
    if (!req.file) {
        imageUrl = null
    }
    else {
        // if(req.file.filename && req.file.filename.length > 0){
        const serverName = "localhost"
        const serverPort = 3000
        imageUrl = `${serverName}:${serverPort}/v1/product/open_image?imageName=${req.file.filename}`
    }

    var data = {
        maloaisp: req.body.maloaisp,
        tenloaisp: req.body.tenloaisp,
        hinhanh: imageUrl
    }

    ProductType.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    ProductType.getById(req.body.maloaisp, function (response) {
        if (response) {

            var imageUrl = null
            if (!req.file) {
                imageUrl = null
            }
            else {
                // if(req.file.filename && req.file.filename.length > 0){
                const serverName = "localhost"
                const serverPort = 3000
                imageUrl = `${serverName}:${serverPort}/v1/product/open_image?imageName=${req.file.filename}`
            }

            var data = {
                maloaisp: req.body.maloaisp,
                tenloaisp: req.body.tenloaisp,
                hinhanh: imageUrl
            }

            ProductType.update(data, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.delete = function (req, res) {
    ProductType.getById(req.body.maloaisp, function (response) {
        if (response) {
            ProductType.remove(req.body.maloaisp, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


