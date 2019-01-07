let books = [
    {'id': 'Orphan Train',
        'title': 'Orphan Train',
        'author': 'Christina Baker Kline',
        'pages': 278,
        'current': 278,
        'isRead': true
    },
    {'id': 'Life of Pi',
        'title': 'Life of Pi',
        'author': 'Yann Martel',
        'pages': 326,
        'current': 245,
        'isRead': false
    },
    {'id': 'The Book Thief',
        'title': 'The Book Thief',
        'author': 'Markus Zusak',
        'pages': 608,
        'current': 608,
        'isRead': true
    },
]

let chosenBook = {}


module.exports = {
    getBooks() {
        return books
    },
    addBook(book) {
        books.push(book)
    },
    findBook(id) {
        const index = books.findIndex(bookThing => bookThing.id === id)
        chosenBook = books[index]
    },
    getBook() {
        return chosenBook
    },
    updateBook (id, book) {
        const index = books.findIndex(bookThing => bookThing.id === id)
        books[index] = book
    },
    deleteBook (id) {
    const index = books.findIndex(bookThing => bookThing.id === id)
    books.splice(index, 1)
    }
}