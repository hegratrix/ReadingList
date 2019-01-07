let books = require('../data/readingList')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.get('/list', (req, res) => res.render('list', {list: books.getBooks()}))
    app.get('/book', (req, res) => {
        res.render('bookEdit', books.getBook())
    })
    app.put('/books/:id', (req, res) => {
        books.updateBook(req.params.id, req.body)
        res.sendStatus(200)
    })
    app.delete('/books/:id', (req, res) => {
        res.sendStatus(200)
        books.deleteBook(req.params.id)
    })
}
