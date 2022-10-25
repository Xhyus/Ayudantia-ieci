const Product = require('../models/product');

const createProduct = (req, res) => {
    const { name, price, quantity, description, category } = req.body;
    const newProduct = new Product({
        name,
        price,
        quantity,
        description,
        category
    });
    newProduct.save((err, product) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el producto" })
        }
        return res.status(201).send(product)
    })
}
const getProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los productos" })
        }
        return res.status(200).send(products)
    })
}

const getSpecificProduct = (req, res) => {
    const { id } = req.params;
    Product.findById(id).populate({ path: 'category' }).exec((err, product) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el producto" })
        }
        if (!product) {
            return res.status(404).send({ message: "Producto no encontrado" })
        }
        return res.status(200).send(product)
    })
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, (err, products) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el producto" })
        }
        if (!products) {
            return res.status(404).send({ message: "Producto no encontrado" })
        }
        return res.status(200).send(products)
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id, (err, products) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el producto" })
        }
        if (!products) {
            return res.status(404).send({ message: "Producto no encontrado" })
        }
        return res.status(200).send(products)
    })
}


module.exports = {
    createProduct,
    getProducts,
    getSpecificProduct,
    updateProduct,
    deleteProduct
}