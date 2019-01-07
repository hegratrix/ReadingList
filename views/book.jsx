const React = require('react')

const Book = props =>
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <style>{`
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
        <div className="card-div">
            <h3 id='book-title' data-booktitle={props.title} className="card-title">{props.title}</h3>
            <h4 id='book-author' data-bookauthor={props.author}>by {props.author}</h4>
            <h5 id='book-page' data-bookpages={props.pages}>Pages Read: {props.current}/{props.pages}</h5>
            <h5 id='if-read' data-bookreadtitle={props.isRead}>{props.isRead ? 'I have read this book.' : 'I have NOT read this book.'}</h5>
            <li className='list-group-item'><button className='btn btn-secondary btn-sm' id='editBTN' data-id={props.title}>EDIT</button> <button className='btn btn-secondary btn-sm' id='deleteBTN' data-id={props.title}>DELETE</button></li>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous"></script>
    </html>

module.exports = Book
