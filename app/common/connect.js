var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    user:'admin',
    password: 'Nganyen1234@',
    database: 'petshop'
})

connection.connect(function (err){
    if(err)
    {
        throw err.stack;
    }
    else
    console.log("connect success");
 })
// connection.connect(function(err){
//     if(err) console.log('Không thành công')
// })
module.exports = connection