const Product = require('../models/product');

const checkRUT = (req, res, next) => {
    Product.findOne({ _id: req.body.rut }, (err, product) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el usuario" })
        }
        if (!product) {
            return res.status(404).send({ message: "El usuario no existe" })
        }
        return res.status(200).send({ message: "Usuario logeado correctamente", rol: "administrador" })
    })
}

module.exports = checkRUT;