const Product = require('../models/product.model');



module.exports.createNew = (req, res) => {
    // console.log('this is the create product controller')
    Product.create(req.body)
        .then(newItem => { res.json({ newItem }) })
        .catch(err => res.status(400).json(err));
};

module.exports.getAllProducts = (req, res) => {
    // console.log('this is get product controller')
    Product.find(req.body)
        .then(allItems => { res.json({ allItems }) })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneItem = (req, res) => {
    const { product_id } = req.params
    Product.findOne({ _id: product_id })
        .then(getItem => res.json({ getItem }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateItem = (req, res) => {
    const { product_id } = req.params
    Product.updateOne({ _id: product_id }, req.body, { new: true })
        .then(updateOneItem => res.json({ updateOneItem }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteOneItem = (req, res) => {
    const { product_id } = req.params
    Product.deleteOne({ _id: product_id })
        .then(deleteItem => res.json({ deleteItem }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};