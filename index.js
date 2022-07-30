
var express = require('express') //xử lí đường link, dữ liệu, json... quản lý các router, db 
var app = express()
/**
 * Cấu hình body-parser
 */
var bodyParser = require('body-parser')
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare')
const authRoute = require('./app/routers/Auth.router')
const cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({extended: false})) //mặc định là true nhưng sử dụng json để false để tránh các lổi kí tự...
app.use(bodyParser.json())
app.use(cookieParser())
/**
 * Allow Origin
 */
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,POST,POT,DELETE")
    next()
})


/**
 * Các routers
 */
//app.use("/v1/auth", authRoute)
//require('./app/routers/home.router')(app)
//require('./app/routers/book.router')(app)

require('./app/routers/Auth2.router')(app)
require('./app/routers/ProductType2.router')(app)
require('./app/routers/Product2.router')(app)
require('./app/routers/Brand2.router')(app)
require('./app/routers/Role2.router')(app)
require('./app/routers/User2.router')(app)

app.use(_AuthMiddleWare.isAuth) // check token hợp lệ thì sẽ được chạy những routers phía dưới 
require('./app/routers/Auth.router')(app)
require('./app/routers/Role.router')(app)
require('./app/routers/Staff.router')(app)
require('./app/routers/User.router')(app)
require('./app/routers/Brand.router')(app)
require('./app/routers/Provider.router')(app)
require('./app/routers/ProductType.router')(app)
require('./app/routers/Product.router')(app)
require('./app/routers/Cart.router')(app)
require('./app/routers/CartDetail.router')(app)
require('./app/routers/Bill.router')(app)

app.listen(3000,function(){
    console.log("Server listening on http://localhost:3000");
})
