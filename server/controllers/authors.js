var Author = require('../models/author.js');


module.exports = {
    index: (req, res) => {
        Author.find()
            .then(authors => res.json({data: authors}))
            .catch(err => res.json(err))
            //console.log(persons)
    },
    show_one: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(author => {res.json(author);
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        author = new Author();
        author.name = req.body.name,
        //author.quote = req.body.quote,
        author.save()
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        var author_id = req.params.id;
        Author.findOne({_id: author_id})
            .then(updatedAuthor => {
                updatedAuthor.name = req.body.name;
                return updatedAuthor.save();
            })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err));
        // Author.updateOne({_id: author_id},{
        //     name: req.body.name
        // })
        // .then(updatedAuthor => res.json(updatedAuthor))
        // .catch(err => res.json(err));
            
    },
    destroy: (req, res) => {
        Author.remove({_id: req.params.id})
        .then(deletedAuthor => res.json({data: deletedAuthor}))
        .catch(err => res.json(err));
    }
};