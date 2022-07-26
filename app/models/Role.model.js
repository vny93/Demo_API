const db = require('../common/connect')
class Role {
    constructor() {
        this.maquyen = Role.maquyen
        this.tenquyen = Role.tenquyen
    }
    //get list 
    static get_all(result) {
        db.query("select * from quyen ", function (err, Role) {
            if (err) {
                result(err)
                return
            }
            result(Role)
        })
    }
    //get by id
    static getById(maquyen, result) {
        db.query("select * from quyen where maquyen = ?", maquyen, function (err, Role) {
            if (err || Role.length == 0)
                result(null)
            else
                result(Role[0])
        })
    }
    //add 
    static create(data, result) {
        db.query("insert into quyen set ?", data, function (err, Role) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update
    static update(data, result) {
        db.query("update quyen set tenquyen = ? where maquyen = ?", [data.tenquyen, data.maquyen], function (err, Role) {
            if (err)
                result(null)
            else
                result("Cập nhật quyền thành công")
        })
    }
    //delete
    static remove(data, result) {
        db.query("delete from quyen where maquyen = ?", data, function (err, Role) {
            if (err)
                result(null)
            else
                result("Xóa quyền " + data + " thành công")
        })
    }
}



module.exports = Role