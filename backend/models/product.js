const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: 'category'
    }
    // status: {
    //     type: Schema.ObjectId,
    //     ref: 'status'
    // }
});

module.exports = mongoose.model('product', ProductSchema);