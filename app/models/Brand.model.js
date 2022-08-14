const db = require('../common/connect')
class Brand {
    constructor() {
        this.mahang = Brand.mahang
        this.tenhang = Brand.tenhang
        this.email = Brand.email
        this.sdt = Brand.sdt
        this.logo = Brand.logo
        this.mota = Brand.mota
    }
    //get list 
    static get_all(result) {
        db.query("select * from hangsanxuat ", function (err, Brand) {
            if (err) {
                result(err)
                return
            }
            result(Brand)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from hangsanxuat where mahang = ?", id, function (err, Brand) {
            if (err || Brand.length == 0)
                result(null)
            else
                result(Brand[0])
        })
    }

    //get by phone
    static getByPhone(sdt, result) {
        db.query("select * from hangsanxuat where sdt = ?", sdt, function (err, Brand) {
            if (err || Brand.length == 0)
                result(false)
            else
                result(Brand[0].mahang)
        })
    }

    //get by email
    static getByEmail(email, result) {
        db.query("select * from hangsanxuat where email = ?", email, function (err, Brand) {
            if (err || Brand.length == 0)
                result(false)
            else
                result(Brand[0].mahang)
        })
    }


    //add 
    static create(data, result) {
        db.query("insert into hangsanxuat set ?", data, function (err, Brand) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update hangsanxuat set tenhang = ?, email = ?, sdt = ?, logo = ?, mota = ?" +
            "where mahang = ?", [data.tenhang, data.email, data.sdt, data.logo, data.mota, data.mahang], function (err, Brand) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update infor not logo
    static updateInfor(data, result) {
        db.query("update hangsanxuat set tenhang = ?, email = ?, sdt = ?, mota = ?" +
            "where mahang = ?", [data.tenhang, data.email, data.sdt, data.mota, data.mahang], function (err, Brand) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update image
    static updateImage(data, result) {
        db.query("update hangsanxuat set logo = ?" +
            "where mahang = ?", [data.logo, data.mahang], function (err, Brand) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //delete
    static remove(id, result) {
        db.query("delete from hangsanxuat where mahang = ?", id, function (err, Brand) {
            if (err)
                result(null)
            else
                result("Xóa hãng sản xuất " + id + " thành công")
        })
    }
}

module.exports = Brand