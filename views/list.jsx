const React = require('react')
let Book = require('./book')
let Buttons = require('./navButtons')

const List = props =>
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <style>{`
            .card-body {
                display: flex;
                justify-content: space-evenly;
            }
            .card {
                text-align: center;
                background-color: #17a2b8;
            }
            .card-div {
                width: 30%;
                text-align: center;
                border: 1px solid black;
                background-color: white;
            }
            .card-title {
                text-decoration: underline
            }
            `}
        </style>
        <title>Reading List</title>
    </head>
    <body>
        <div className="card">
            <Buttons />
            <h2>Book List</h2>
            <div className="card-body">
                {props.list.map(book =>
                    <Book title={book.title} author={book.author} pages={book.pages} current={book.current} isRead={book.isRead} />
                )}
            </div>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous"></script>
    <script src='/js/list.js' type='application/javascript' />
    </html>

module.exports = List