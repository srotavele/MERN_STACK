const Author = require("../models/author.model")



module.exports.test = (req, res) =>{
    return res.json({message: "TEST ROUTE"})
}

module.exports.createAuthor =(req, res) => {
    console.log(req.body) //ERROR 400 reveal
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}
// module.exports.getAll
// module.exports.getOne
// module.exports.update
// module.exports.delete