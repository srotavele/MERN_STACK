const Product = require('../models/product.model');



module.exports.createNew = (req, res) => {
    console.log('this is the create product controller')
    Product.create(req.body)
        .then(newItem => {res.json({ newItem })})
        .catch(err => res.status(400).json( err ));
};

module.exports.getAllProducts = (req, res) => {
    console.log('this is get product controller')
    Product.find(req.body)
        .then(allItems => {res.json({ allItems })})
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};