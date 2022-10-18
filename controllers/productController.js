const Product = require('../models/product');

const createProduct = (req, res) => {
    const { name, price, quantity, description } = req.body;
    const newProduct = new Product({
        name,
        price,
        quantity,
        description
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

module.exports = {
    createProduct,
    getProducts
}