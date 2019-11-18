author = require('../controllers/authors.js')

module.exports = function(app){
    app.get('/authors', author.index);
    app.get('/author/:id', author.show_one);
    app.post('/author', author.create);
    app.put('/author/:id', author.update);
    app.delete('/author/:id', author.destroy);
};