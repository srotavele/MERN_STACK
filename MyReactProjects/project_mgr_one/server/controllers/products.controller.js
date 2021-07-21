const Product = require('../models/product.model');



module.exports.createNew = (req, res) => {
    console.log('this is the create product controller')
    console.log(req.body)
    Product.create(req.body)
        .then(newItem => {res.json({ newItem })})
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getAllProducts = (req, res) => {
    console.log('this is get product controller')
    console.log(req.body)
    Product.find(req.body)
        .then(allItems => {res.json({ allItems })})
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};