const ProductController = require ('../controllers/products.controller');



module.exports = app => {
    app.post("/api/products/", ProductController.createNew);
    app.get("/api/products/", ProductController.getAllProducts);
    // app.get("/api/products/:id", ProductController.getOne);
    // app.put("/api/products/update/:id", ProductController.updateOne);
    // app.delete("/api/products/delete/:id", ProductController.deleteOne)
}