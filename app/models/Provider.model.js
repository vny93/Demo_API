const db = require('../common/connect')
class Provider {
    constructor() {
        this.manhacc = Provider.manhacc
        this.tennhacc = Provider.tenhang
        this.diachi = Provider.diachi
        this.sdt = Provider.sdt
        this.email = Provider.email
    }
    //get list
    static get_all(result) {
        db.query("select * from nhacungcap ", function (err, Provider) {
            if (err) {
                result(err)
                return
            }
            result(Provider)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from nhacungcap where manhacc = ?", id, function (err, Provider) {
            if (err || Provider.length == 0)
                result(null)
            else
                result(Provider[0])
        })
    }
    //add tk
    static create(data, result) {
        db.query("insert into nhacungcap set ?", data, function (err, Provider) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update nhacungcap set tennhacc = ?, diachi = ?, sdt = ?, email = ?"+
        "where manhacc = ?", [data.tennhacc, data.diachi, data.sdt, data.email, data.manhacc], function (err, Provider) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from nhacungcap where manhacc = ?", id, function (err, Provider) {
            if (err)
                result(null)
            else
                result("Xóa nhà cung cấp " + id + " thành công")
        })
    }
}

module.exports = Provider