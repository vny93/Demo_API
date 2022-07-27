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

  router.get('/v1/productType/detail', productTypeController.detail)

  router.post('/v1/productType/add', upload.single('hinhanh'), productTypeController.add)

  router.put('/v1/productType/update',upload.single('hinhanh'), productTypeController.update)

  router.delete('/v1/productType/delete', productTypeController.delete)
}