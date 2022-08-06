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
                db.query("call getGiohangByTrangThai(?,?)", [tt,data.makh] ,function (err, Cart) {
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
        db.query("call getGiohangByTrangThai(?,?)", [data.trangthai,data.makh], function (err, Cart) {
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
            data.diachinguoinhan, data.sdtnguoinhan, data.emailnguoinhan, data.ngaygiao, data.tongtien, data.trangthai,data.ngaydukien, data.manvduyet,
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
            var date= dateFormat.format(now,'YYYY-MM-DD HH:mm:ss')
            console.log(date)
            db.query("update giohang set ngaydat = ?, hotennguoinhan = ?, diachinguoinhan = ?, sdtnguoinhan = ?, emailnguoinhan = ?," +
                "tongtien = ?, trangthai = ? where magh = ?", [date, data.hotennguoinhan,
                data.diachinguoinhan, data.sdtnguoinhan, data.emailnguoinhan, data.tongtien, data.trangthai, data.magh], function (err, Cart) {
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