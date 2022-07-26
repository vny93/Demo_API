const db = require('../common/connect')
class ProductType {
    constructor() {
        this.maloaisp = ProductType.maloaisp
        this.tenloaisp = ProductType.tenloaisp
        this.hinhanh = ProductType.hinhanh
    }
    //get list 
    static get_all(result) {
        db.query("select * from loaisanpham ", function (err, ProductType) {
            if (err) {
                result(err)
                return
            }
            result(ProductType)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from loaisanpham where maloaisp = ?", id, function (err, ProductType) {
            if (err || ProductType.length == 0)
                result(null)
            else
                result(ProductType[0])
        })
    }
    //add 
    static create(data, result) {
        db.query("insert into loaisanpham set ?", data, function (err, ProductType) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update loaisanpham set tenloaisp = ?, hinhanh = ? "+
        "where maloaisp = ?", [data.tenloaisp, data.hinhanh, data.maloaisp], function (err, ProductType) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from loaisanpham where maloaisp = ?", id, function (err, ProductType) {
            if (err)
                result(null)
            else
                result("Xóa loại sản phẩm " + id + " thành công")
        })
    }
}

module.exports = ProductType