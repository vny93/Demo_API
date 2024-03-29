const { response } = require('express')
var Product = require('../models/Product.model')
const fs = require('fs')

exports.open_image = function(req, res){
    let imgaeName = "src/image/" + req.query.imageName
    fs.readFile(imgaeName, (err, ImageData)=>{
        if(err){
            res.json({
                result: "failed",
                message: `Cannot read image. Error is : ${err}`
            })
        }
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        res.end(ImageData)
    })
}


exports.get_list = function (req, res) {
    try {
        Product.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.get_full = function (req, res) {
    try {
        Product.get_full(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//get by brand
exports.getByBrand = function (req, res) {
    try {
        Product.getByBrand(req.body.mahang,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//discount
exports.getDiscount = function (req, res) {
    try {
        Product.getDiscount(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
//is new
exports.getIsNew = function (req, res) {
    try {
        Product.getIsNew(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
//is good
exports.getIsGood = function (req, res) {
    try {
        Product.getIsGood(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//search
exports.searchProduct = function (req, res) {
    try {
        Product.searchProduct(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}


exports.detail = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.get_list_fk = function (req, res) {
    Product.getByFk(req.body.maloaisp, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.checkProductUse = function (req, res) {
    Product.checkProductUse(req.body.masp, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    Product.create(req.body, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            var imageUrl = null
            if (!req.file) {
                imageUrl = null
            }
            else{
           // if(req.file.filename && req.file.filename.length > 0){
                const serverName = "localhost"
                const serverPort = 3000
                imageUrl = `${serverName}:${serverPort}/v1/product/open_image?imageName=${req.file.filename}`
            }
            var data = {
                masp: req.body.masp,
                tensp: req.body.tensp,
                gia: req.body.gia,
                soluong : req.body.soluong,
                mota: req.body.mota,
                hinhanh: imageUrl,
                maloaisp: req.body.maloaisp,
                mahang : req.body.mahang,
                manhacc: req.body.manhacc,
                isgood : req.body.isgood,
                isnew : req.body.isnew
            }
            Product.update(data, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}
//update infor
exports.update_infor = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            Product.updateInfor(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//update infor
exports.update_image = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            Product.updateImage(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.update_amount = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            Product.updateAmount(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.delete = function (req, res) {
    Product.getById(req.body.masp, function (response) {
        if(response){
            Product.remove(req.body.masp, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


