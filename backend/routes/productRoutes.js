const express = require('express');
const api = express.Router();
const productController = require('../controllers/productController');
const checkRUT = require('../middlewares/checkRUT');

api.post('/product', productController.createProduct);
api.get('/products', productController.getProducts);
api.get('/product/search/:id', productController.getSpecificProduct);
api.put('/product/update/:id', productController.updateProduct);
api.delete('/product/delete/:id', productController.deleteProduct);
api.post('/login', checkRUT)

module.exports = api;