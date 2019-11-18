const mongoose = require('mongoose');
//const flash = require('express-flash');


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    // quote: {
    //     type: String,
    //     required: true,
    //     minlength: 3
    // },
}, {timestamps: true});
    


const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;