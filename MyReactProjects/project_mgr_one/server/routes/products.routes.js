const ProductController = require ('../controllers/products.controller');



module.exports = app => {
    app.post("/api/products/", ProductController.createNew);
    app.get("/api/products/", ProductController.getAllProducts);
    app.get("/api/products/:product_id", ProductController.getOneItem);
    // app.put("/api/products/update/:id", ProductController.updateOne);
    app.delete("/api/products/:product_id", ProductController.deleteOneItem)
}