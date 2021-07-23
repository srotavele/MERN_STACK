const AuthorController = require("../controllers/author.controller")



module.exports = app => {
    app.get("/api/test", AuthorController.test)
    app.post("/api/authors/new", AuthorController.createAuthor)
}