module.exports = function (router) {
  const productTypeController = require('../controllers/ProductType.controller')
  const multer = require('multer')
  const path = require('path')

  const storage = multer.diskStorage({
    destination: './src/image/',
    filename: (req, file, cb) => {
      if (file.fieldname.length == 0) {
        return null
      }
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })

  const upload = multer({
    storage: storage
  })

  //router.get('/v1/productType/list', productTypeController.get_list)

  router.post('/v1/productType/detail', productTypeController.detail)

  router.post('/v1/productType/add', productTypeController.add)

  router.put('/v1/productType/update',upload.single('hinhanh'), productTypeController.update)

  router.put('/v1/productType/update/infor', productTypeController.updateInfor)

  router.put('/v1/productType/update/image',productTypeController.updateImage)

  router.post('/v1/productType/check/use', productTypeController.checkPTUse)

  router.post('/v1/productType/delete', productTypeController.delete)
}