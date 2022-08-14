const db = require('../common/connect')
class Staff {
    constructor() {
        this.manv = Staff.manv
        this.hoten = Staff.hoten
        this.gioitinh = Staff.gioitinh
        this.diachi = Staff.diachi
        this.ngaysinh = Staff.ngaysinh
        this.sdt = Staff.sdt
        this.email = Staff.email
        this.tendangnhap = Staff.tendangnhap
    }
    //get list
    static get_all(result) {
        db.query("select * from nhanvien ", function (err, Staff) {
            if (err) {
                result(err)
                return
            }
            result(Staff)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from nhanvien where manv = ?", id, function (err, Staff) {
            if (err || Staff.length == 0)
                result(null)
            else
                result(Staff[0])
        })
    }

    //get by tk
    static getByTk(id, result) {
        db.query("select * from nhanvien where tendangnhap = ?", id, function (err, Staff) {
            if (err || Staff.length == 0)
                result(null)
            else
                result(Staff[0])
        })
    }
    //add tk
    static create(data, result) {
        db.query("insert into nhanvien set ?", data, function (err, Staff) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update nhanvien set hoten = ?, gioitinh = ?, diachi = ?, ngaysinh = ?," +
            "sdt = ?, email = ? where manv = ?", [data.hoten, data.gioitinh, data.diachi,
            data.ngaysinh, data.sdt, data.email, data.manv], function (err, Staff) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update
    static update2(data, result) {
        db.query("update nhanvien set sdt = ? where manv = ?", [data.sdt, data.manv], function (err, Staff) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from nhanvien where manv = ?", id, function (err, Staff) {
            if (err)
                result(null)
            else
                result("Xóa nhân viên " + id + " thành công")
        })
    }
}

module.exports = Staff