const AuthorController = require("../controllers/author.controller")



module.exports = app => {
    app.get("/api/test", AuthorController.test)
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.get("/api/authors/", AuthorController.getAllAuthors)
    app.put("/api/authors/:author_id", AuthorController.editAuthor)
    app.get("/api/authors/:author_id", AuthorController.getOneAuthor)
    app.delete("/api/authors/:author_id", AuthorController.deleteAuthor)
    
}