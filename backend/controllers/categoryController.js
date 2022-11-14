const Category = require('../models/category');
const Product = require('../models/product')

const createCategory = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const newCategory = new Category({
        name
    })
    newCategory.save((err, category) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear la categoria" })
        }
        Product.findByIdAndUpdate(id, { category: category }, (err, product) => {
            if (err) {
                return res.status(400).send({ message: "No se ha podido crear la categoria" })
            }
            if (!product) {
                return res.status(404).send({ message: "No existe el producto" })
            }
            return res.status(201).send(category)
        })
    })
}

const getCategories = (req, res) => {
    Category.find({}, (err, category) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener las categorias" })
        }
        return res.status(201).send(category)
    })
}

const getSpecificCategory = (req, res) => {
    const { id } = req.params
    Category.findById(id, (err, category) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar la categoria" })
        }
        if (!category) {
            return res.status(404).send({ message: "No se encontro esa categoria" })
        }
        return res.status(201).send(category)
    })
}

const updateCategory = (req, res) => {
    const { id } = req.params
    Category.findByIdAndUpdate(id, req.body, (err, category) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la categoria" })
        }
        if (!category) {
            return res.status(404).send({ message: "No se encontro esa categoria" })
        }
        return res.status(201).send(category)
    })
}

const deleteCategory = (req, res) => {
    const { id } = req.params
    Category.findByIdAndDelete(id, (err, category) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la categoria" })
        }
        if (!category) {
            return res.status(404).send({ message: "No se encontro esa categoria" })
        }
        return res.status(201).send(category)
    })
}

module.exports = {
    createCategory,
    getCategories,
    getSpecificCategory,
    updateCategory,
    deleteCategory
}