module.exports = function(router){
    const brandController = require('../controllers/Brand.controller')
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


  //router.post('/v1/brand/detail', brandController.detail)

  router.post('/v1/brand/add',upload.single('logo'), brandController.add)

  router.put('/v1/brand/update', upload.single('logo'), brandController.update)

  router.put('/v1/brand/update/image', upload.single('logo'), brandController.updateImage)

  router.delete('/v1/brand/delete', brandController.delete)
}