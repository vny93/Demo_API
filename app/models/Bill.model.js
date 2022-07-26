const db = require('../common/connect')
class Bill {
    constructor() {
        this.mahd = Bill.mahd
        this.ngaytao = Bill.ngaytao
        this.masothue = Bill.masothue
        this.manv = Bill.manv
        this.magh = Bill.magh
    }
    //get list
    static get_all(result) {
        db.query("select * from hoadon ", function (err, Bill) {
            if (err) {
                result(err)
                return
            }
            result(Bill)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from hoadon where mahd = ?", id, function (err, Bill) {
            if (err || Bill.length == 0)
                result(null)
            else
                result(Bill[0])
        })
    }
    //add tk
    static create(data, result) {
        db.query("insert into hoadon set ?", data, function (err, Bill) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update hoadon set ngaytao = ?, masothue = ?, manv = ?, magh = ?"+
        " where mahd = ?", [data.ngaytao, data.masothue, data.manv, 
            data.magh, data.mahd], function (err, Bill) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from hoadon where mahd = ?", id, function (err, Bill) {
            if (err)
                result(null)
            else
                result("Xóa hóa đơn " + id + " thành công")
        })
    }
}

module.exports = Bill