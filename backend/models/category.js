const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+$/,
    }
})

module.exports = mongoose.model('category', CategorySchema);