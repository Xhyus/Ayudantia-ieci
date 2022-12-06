import axios from 'axios';

const getProducts = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/products`);
    return response
}

const createProduct = (product) => {
    const response = axios.post(`${process.env.SERVIDOR}/product`, {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
    });
    return response
}

const getProduct = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/product/search/${id}`)
    return response
}

const updateProduct = (id, product) => {
    const response = axios.put(`${process.env.SERVIDOR}/product/update/${id}`, product)
    return response
}

module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct
}