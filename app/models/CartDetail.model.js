const db = require('../common/connect')
class CartDetail {
    constructor() {
        this.magh = CartDetail.magh
        this.masp = CartDetail.masp
        this.gia = CartDetail.gia
        this.ctsoluong = CartDetail.ctsoluong
        this.mapt = CartDetail.mapt
        this.soluongtra = CartDetail.soluongtra
    }
    //get list
    static get_all(result) {
        db.query("select * from chitietgiohang ", function (err, CartDetail) {
            if (err) {
                result(err)
                return
            }
            result(CartDetail)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from chitietgiohang where magh = ?", id, function (err, CartDetail) {
            if (err || CartDetail.length == 0)
                result(null)
            else
                result(CartDetail)
        })
    }

    //get by id
    static getById2(id, result) {
        db.query("call getListCartDetail(?)", id, function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //find product by idcart and idpro
    static findCartDetail(req, result) {
        db.query("call FindProFromCartDetail(?,?)",[req.magh,req.masp], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }


    //get by id and masp
    static getByIdProduct(data, result) {
        db.query("select * from chitietgiohang where magh = ? and masp = ?", [data.magh, data.masp], function (err, CartDetail) {
            if (err || CartDetail.length == 0)
                result(null)
            else
                result(CartDetail[0])
        })
    }

    //add tk
    static create(data, result) {
        db.query("insert into chitietgiohang set ?", data, function (err, CartDetail) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update chitietgiohang set gia = ?, ctsoluong = ?, mapt = ?, soluongtra = ?" +
            " where magh = ? and masp = ?", [data.gia, data.ctsoluong, data.mapt,
            data.soluongtra, data.magh, data.masp], function (err, CartDetail) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update 
    static updateDetail(data, result) {
        db.query("update chitietgiohang set gia = ?, ctsoluong = ?" +
            " where magh = ? and masp = ?", [data.gia, data.ctsoluong, data.magh, data.masp], function (err, CartDetail) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //delete sạch chi tiết giỏ hàng có id là : id
    static remove(id, result) {
        db.query("delete from chitietgiohang where magh = ?", id, function (err, CartDetail) {
            if (err)
                result(null)
            else
                result("Xóa chi tiết giỏ hàng " + id + " thành công")
        })
    }

    //delete chi tiết giỏ hàng với id và masp
    static removeIdProduct(data, result) {
        db.query("delete from chitietgiohang where magh = ? and masp = ?", [data.magh, data.masp], function (err, CartDetail) {
            if (err)
                result(null)
            else
                result("Xóa chi tiết giỏ hàng " + data.magh + " với mã sản phẩm " + data.masp + " thành công")
        })
    }
}

module.exports = CartDetail