const db = require('../common/connect')
class Product {
    constructor() {
        this.masp = Product.masp
        this.tensp = Product.tensp
        this.gia = Product.gia
        this.soluong = Product.soluong
        this.mota = Product.mota
        this.hinhanh = Product.hinhanh
        this.maloaisp = Product.maloaisp
        this.mahang = Product.mahang
        this.manhacc = Product.manhacc
        this.isgood = Product.isgood
        this.isnew = Product.isnew

    }
    //get list 
    static get_all(result) {
        db.query("select * from sanpham ", function (err, Product) {
            if (err) {
                result(err)
                return
            }
            result(Product)
        })
    }
    //get by id
    static getById(id, result) {
        db.query("select * from sanpham where masp = ?", id, function (err, Product) {
            if (err || Product.length == 0)
                result(null)
            else
                result(Product[0])
        })
    }

    //get list by maloaisp
    static getByFk(id, result) {
        db.query("call getSpFromLoaisp(?)", id, function (err, Product) {
            if (err) {
                result(err)
                return
            }
            result(Product[0])
        })
    }

    //add 
    static create(data, result) {
        db.query("insert into sanpham set ?", data, function (err, Product) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
    //update 
    static update(data, result) {
        db.query("update sanpham set tensp = ?, gia = ?, soluong = ?, mota = ?, hinhanh = ?, maloaisp = ?,"+
        "mahang = ?, manhacc = ?, isgood = ?, isnew = ? where masp = ?", [data.tensp, data.gia, data.soluong, data.mota, data.hinhanh,
        data.maloaisp, data.mahang, data.manhacc, data.isgood, data.isnew, data.masp], function (err, Product) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }
    //update amount
    static updateAmount(data, result) {
        db.query("update sanpham set soluong = ? where masp = ?", [data.soluong, data.masp], function (err, Product) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from sanpham where masp = ?", id, function (err, Product) {
            if (err)
                result(null)
            else
                result("Xóa loại sản phẩm " + id + " thành công")
        })
    }
}

module.exports = Product