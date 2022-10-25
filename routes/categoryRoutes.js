const express = require('express')
const api = express.Router()
const categoryController = require('../controllers/categoryController')

api.post('/category/:id', categoryController.createCategory)
api.get('/categories', categoryController.getCategories)
api.get('/category/search/:id', categoryController.getSpecificCategory)
api.put('/category/update/:id', categoryController.updateCategory)
api.delete('/category/delete/:id', categoryController.deleteCategory)

module.exports = api;