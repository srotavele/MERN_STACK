const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "Title must be epic"]
    },
    price: {
        type: Number,
        min : [0, "Price must be at least half of your savings"]
    },
    description: {
        type: String,
        required : [true, "Description must rhyme with Orange"]
    }
}, {timestamps: true});



const Product = mongoose.model('Product', ProductSchema)
module.exports = Product