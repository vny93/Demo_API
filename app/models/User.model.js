const db = require('../common/connect')
class User {
    constructor() {
        this.makh = User.makh
        this.hoten = User.hoten
        this.gioitinh = User.gioitinh
        this.diachi = User.diachi
        this.ngaysinh = User.ngaysinh
        this.sdt = User.sdt
        this.email = User.email
        this.masothue = User.masothue
        this.tendangnhap = User.tendangnhap
    }
    //get list
    static get_all(result) {
        db.query("select * from khachhang ", function (err, User) {
            if (err) {
                result(err)
                return
            }
            result(User)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from khachhang where makh = ?", id, function (err, User) {
            if (err || User.length == 0)
                result(null)
            else
                result(User[0])
        })
    }

    //get by tk
    static getByTk(id, result) {
        db.query("select * from khachhang where tendangnhap = ?", id, function (err, User) {
            if (err || User.length == 0)
                result(null)
            else
                result(User[0])
        })
    }

    //get by phone
    static getByPhone(sdt, result) {
        db.query("select * from khachhang where sdt = ?", sdt, function (err, User) {
            if (err || User.length == 0)
                result(false)
            else
                result(User[0].makh)
        })
    }

    //get by email
    static getByEmail(email, result) {
        db.query("select * from khachhang where email = ?", email, function (err, User) {
            if (err || User.length == 0)
                result(false)
            else
                result(User[0].makh)
        })
    }

    //add 
    static create(data, result) {
        db.query("insert into khachhang set ?", data, function (err, User) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update khachhang set hoten = ?, gioitinh = ?, diachi = ?, ngaysinh = ?," +
            "sdt = ?, email = ?, masothue = ? where makh = ?", [data.hoten, data.gioitinh, data.diachi,
            data.ngaysinh, data.sdt, data.email, data.masothue, data.makh], function (err, User) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //delete
    static remove(id, result) {
        db.query("delete from khachhang where makh = ?", id, function (err, User) {
            if (err)
                result(null)
            else
                result("Xóa khách hàng " + id + " thành công")
        })
    }
}

module.exports = User