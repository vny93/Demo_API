module.exports = function(router){
    const productController = require('../controllers/Product.controller')
    const multer = require('multer')
    const path = require('path')
    const fs = require('fs')

    const storage = multer.diskStorage({
        destination:'./src/image/',
        filename:(req,file,cb)=>{
            if(file.fieldname.length == 0){
                return null
            }
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })

    const upload = multer({
        storage : storage
    })

 // router.get('/v1/product/open_image', productController.open_image)

  router.get('/v1/product/list', productController.get_list)

  router.get('/v1/product/full', productController.get_full)

 // router.post('/v1/product/list_fk', productController.get_list_fk)

 // router.post('/v1/product/detail', productController.detail)

  router.post('/v1/product/add',productController.add)

  router.put('/v1/product/update',upload.single('hinhanh'), productController.update)

  router.put('/v1/product/update/amount', productController.update_amount)

  router.put('/v1/product/update/infor', productController.update_infor)

  router.put('/v1/product/update/image', productController.update_image)

  router.post('/v1/product/check/use', productController.checkProductUse)

  router.post('/v1/product/delete', productController.delete)
}