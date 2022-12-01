const { response } = require('express')
var Cart = require('../models/Cart.model')

exports.get_list = function (req, res) {
    try {
        Cart.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.detail = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


exports.add = function (req, res) {
    var data = {
        // magh : null,
        // ngaydat : null,
        // hotennguoinhan : null,
        // diachinguoinhan :null,
        // sdtnguoinhan : null,
        // emailnguoinhan : null,
        // ngaygiao : null,
        // tongtien : req.body.tongtien,
        trangthai: "",
        // manvduyet : null,
        // manvgiao : null,
        makh: req.body.makh
    }

    Cart.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.getCartByStatus = function (req, res) {
    Cart.getCartByStatus(req.body, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}
//get order
exports.get_order = function (req, res) {
    Cart.get_order(req.body, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}
//get order shipper
exports.get_order_shipper = function (req, res) {
    Cart.get_order_shipper(req.body, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}
//get doanh thu
exports.get_turnover = function (req, res) {
    Cart.get_turnover(req.body, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.user_update_cart = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.userUpdateCart(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


exports.admin_update_cart = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.adminUpdate(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.admin_update_status = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.adminUpdateStatus(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


exports.shipper_update_cart = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.shipperUpdate(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.user_update_status = function (req, res) {
    Cart.userUpdateStatus(req.body, function (response) {
        res.send({ result: response })
    })
}




exports.delete = function (req, res) {
    Cart.getById(req.body.magh, function (response) {
        if (response) {
            Cart.remove(req.body.magh, function (response) {
                res.send({ result: response })
            })
        }
        else {
            res.status(404).json("not find")
        }
    })
}


