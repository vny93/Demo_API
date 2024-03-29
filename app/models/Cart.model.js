const db = require('../common/connect')
const dateFormat = require('date-and-time')
class Cart {
    constructor() {
        this.magh = Cart.magh
        this.ngaydat = Cart.ngaydat
        this.hotennguoinhan = Cart.hotennguoinhan
        this.diachinguoinhan = Cart.diachinguoinhan
        this.sdtnguoinhan = Cart.sdtnguoinhan
        this.emailnguoinhan = Cart.emailnguoinhan
        this.ngaygiao = Cart.ngaygiao
        this.tongtien = Cart.tongtien
        this.trangthai = Cart.trangthai
        this.ngaydukien = Cart.ngaydukien //mới thêm
        this.manvduyet = Cart.manvduyet
        this.manvgiao = Cart.manvgiao
        this.makh = Cart.makh
        this.ptthanhtoan = Cart.ptthanhtoan
        this.phigiao = Cart.phigiao
        this.khoiluong = Cart.khoiluong
        this.ttthanhtoan = Cart.ttthanhtoan
        this.htvanchuyen = Cart.htvanchuyen
    }
    //get list
    static get_all(result) {
        db.query("select * from giohang ", function (err, Cart) {
            if (err) {
                result(err)
                return
            }
            result(Cart)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from giohang where magh = ?", id, function (err, Cart) {
            if (err || Cart.length == 0)
                result(null)
            else
                result(Cart[0])
        })
    }
    //add tk
    static create(data, result) {
        db.query("insert into giohang set ?", data, function (err, Cart) {
            if (err)
                result(null)
            else
                var tt = ""
            db.query("call getGiohangByTrangThai(?,?)", [tt, data.makh], function (err, Cart) {
                if (err) {
                    result(err)
                    return
                }
                result(Cart[0])
            })
            //  result(data)
        })
    }

    //get gio hang trạng thái rỗng
    static getCartByStatus(data, result) {
        db.query("call getGiohangByTrangThai(?,?)", [data.trangthai, data.makh], function (err, Cart) {
            if (err) {
                result(err)
                return
            }
            result(Cart[0])
        })
    }


    //update 
    static update(data, result) {
        db.query("update giohang set ngaydat = ?, hotennguoinhan = ?, diachinguoinhan = ?, sdtnguoinhan = ?, emailnguoinhan = ?," +
            " ngaygiao = ?, tongtien = ?, trangthai = ?, ngaydukien = ?, manvduyet = ?, manvgiao = ?, makh = ? where magh = ?", [data.ngaydat, data.hotennguoinhan,
            data.diachinguoinhan, data.sdtnguoinhan, data.emailnguoinhan, data.ngaygiao, data.tongtien, data.trangthai, data.ngaydukien, data.manvduyet,
            data.manvgiao, data.makh, data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //user update cart 
    static userUpdateCart(data, result) {
        const now = new Date()
        var date = dateFormat.format(now, 'YYYY-MM-DD HH:mm:ss')
        console.log(date)
        console.log(data.hotennguoinhan)
        console.log(data.diachinguoinhan)
        console.log(data.sdtnguoinhan)
        console.log(data.emailnguoinhan)
        console.log(data.tongtien)
        console.log(data.trangthai)
        console.log(data.ngaydukien)
        console.log(data.ptthanhtoan)
        console.log(data.phigiao)
        console.log(data.khoiluong)
        console.log(data.ttthanhtoan)
        console.log(data.htvanchuyen)
        console.log(data.magh)

        db.query("update giohang set ngaydat = ?, hotennguoinhan = ?, diachinguoinhan = ?, sdtnguoinhan = ?, emailnguoinhan = ?," +
            "tongtien = ?, trangthai = ?,ngaydukien = ?, ptthanhtoan = ?," +
            "phigiao = ?, khoiluong = ?, ttthanhtoan = ?, htvanchuyen = ? where magh = ?", [date, data.hotennguoinhan,
            data.diachinguoinhan, data.sdtnguoinhan, data.emailnguoinhan, data.tongtien, data.trangthai, data.ngaydukien,
            data.ptthanhtoan, data.phigiao, data.khoiluong, data.ttthanhtoan, data.htvanchuyen, data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //get order
    static get_order(data, result) {
        db.query("call get_order(?,?,?,?)", [data.makh, data.dateFrom, data.dateTo, data.trangthai], function (err, Cart) {
            if (err || Cart[0].length == 0)
                result(Cart[0])
            else
                result(Cart[0])
        })
    }

    //get order shipper
    static get_order_shipper(data, result) {
        db.query("call get_order_shipper(?,?,?,?)", [data.manv, data.dateFrom, data.dateTo, data.trangthai], function (err, Cart) {
            if (err || Cart[0].length == 0)
                result(Cart[0])
            else
                result(Cart[0])
        })
    }

    //get doanh thu theo tháng + năm
    static get_turnover(data, result) {
        db.query("call get_turnover(?,?)", [data.dateFrom, data.dateTo], function (err, res) {
            if (err || res.length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //admin update cart
    static adminUpdate(data, result) {
        db.query("update giohang set " +
            "ngaygiao = ?, trangthai = ?, manvduyet = ?, manvgiao = ? where magh = ?", [data.ngaygiao,
            data.trangthai, data.manvduyet, data.manvgiao, data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update status cart
    static adminUpdateStatus(data, result) {
        db.query("update giohang set " +
            "trangthai = ?, manvduyet = ? where magh = ?", [data.trangthai, data.manvduyet, data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //shipper update cart
    static shipperUpdate(data, result) {
        db.query("update giohang set " +
            " trangthai = ?, ngaydukien = ? where magh = ?", [data.trangthai, data.ngaydukien,
            data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //user update cart status
    static userUpdateStatus(data, result) {
        db.query("update giohang set " +
            " trangthai = ? where magh = ?", [data.trangthai,data.magh], function (err, Cart) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //delete
    static remove(id, result) {
        db.query("delete from giohang where magh = ?", id, function (err, Cart) {
            if (err)
                result(null)
            else
                result("Xóa giỏ hàng " + id + " thành công")
        })
    }
}

module.exports = Cart