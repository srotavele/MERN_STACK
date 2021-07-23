const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Author's name is REQUIRED and must be at least 3 characters long"],
        min:[3]
    }
}, {timestamps:true})

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author