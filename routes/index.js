const express = require("express");
const router = express.Router();
const indexController = require('../controllers/index_controller')

router.get('/', indexController.getBrands)
router.get('/models/:brandId', indexController.getModels)
router.get('/errors/:modelId', indexController.getErrorCodes)
router.get('/result', indexController.getResult)

module.exports = router

