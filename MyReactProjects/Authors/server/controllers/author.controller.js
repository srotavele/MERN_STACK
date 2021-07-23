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

module.exports.getAllAuthors = (req,res) =>{
    Author.find().sort({name: 'asc'})
        .then(AllAuthors => res.json(AllAuthors))
        .catch(err => res.json(err))
}

module.exports.editAuthor = (req,res) =>{
    const {author_id} = req.params
    Author.findOneAndUpdate({_id: author_id}, req.body, {new:true, runValidators:true})
        .then(editAuthor => res.json(editAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneAuthor = (req,res) => {
    const {author_id} = req.params
    // console.log(author_id)
    Author.findOne({_id: author_id})
        .then(oneAuthor => {
            console.log(oneAuthor)
            res.json(oneAuthor)})
        .catch(err => res.json(err))

}

module.exports.deleteAuthor = (req,res) =>{
    const {author_id} = req.params
    // console.log(author_id)
    Author.deleteOne({_id: author_id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}