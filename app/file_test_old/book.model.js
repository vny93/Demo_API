const db = require('../common/connect')
const Book = function(){
    this.id = book.id
    this.name = book.name
    this.image = book.image
    this.author = book.author_id
}

Book.get_all = function(result){
    db.query("select * from book ", function(err,book){
        if(err){
            result(err)
            return
        }
        result(book)
    })
}
/*
    var data = [
        {"id":1,"name":"Book name 1"},
        {"id":2,"name":"Book name 2"},
        {"id":3,"name":"Book name 3"},
        {"id":4,"name":"Book name 4"},
    ]
    result(data)

Book.getById = function(id){
    var data = {"id":1,"name":"Book name 1"}
    return data
}*/

Book.getById = function(id, result){
    db.query("select * from book where id = ?",id, function(err,book){
        if(err || book.length == 0) result(null)
        else result(book[0])
    })
}

Book.getById2 = function(id, result){
    db.query("select * from book where id = ?",id, function(err,book){
        if(err) result(null)
        else result(book)
    })
}

/*Book.create = function(data,result){
    result(data)
}*/

Book.create = function(data,result){
    db.query("insert into book set ?", data, function(err,book){
        if(err) result(null)
        else result({id: book.insertId, ...data})
    })
}

/*Book.remove = function(id,result){
    result("Xóa book có id "+id+" thành công")
}*/

Book.remove = function(id,result){
    db.query("delete from book where id = ?", id, function(err,book){
        if(err) result(null)
        else result("Xóa dữ liệu book có id "+id+" thành công")
    })
}

/*Book.update = function(data,result){
    result(data)
}*/

Book.update = function(b,result){
    db.query("update book set name = ?, image = ?, author_id = ? where id = ?", [b.name, b.image, b.author_id,b.id], function(err,book){
        if(err) result(null)
        else result(b)
    })
}


module.exports = Book