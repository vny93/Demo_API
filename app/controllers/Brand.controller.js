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
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.getBrandPhone = function (req, res) {
    Brand.getByPhone(req.body.sdt, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.getBrandEmail = function (req, res) {
    Brand.getByEmail(req.body.email, function (response) {
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
        mahang: req.body.mahang,
        tenhang: req.body.tenhang,
        email: req.body.email,
        sdt: req.body.sdt,
        logo: imageUrl,
        mota: req.body.mota

    }

    Brand.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.update = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {

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
                mahang: req.body.mahang,
                tenhang: req.body.tenhang,
                email: req.body.email,
                sdt: req.body.sdt,
                logo: imageUrl,
                mota: req.body.mota

            }

            Brand.update(data, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

//-----
exports.updateInfor = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
        if (response) {
            Brand.updateInfor(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.updateImage = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
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
                mahang: req.body.mahang,
                logo: imageUrl,

            }

            Brand.updateImage(data, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

//return url
exports.getUrl = function (req, res) {
    var imageUrl = null
    if (!req.file) {
        console.log("vô đây à ?")
        imageUrl = null
    }
    else {
        // if(req.file.filename && req.file.filename.length > 0){
        const serverName = "localhost"
        const serverPort = 3000
        imageUrl = `${serverName}:${serverPort}/v1/product/open_image?imageName=${req.file.filename}`
    }
    res.send({ result: imageUrl })

}

exports.delete = function (req, res) {
    Brand.getById(req.body.mahang, function (response) {
        if (response) {
            Brand.remove(req.body.mahang, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


