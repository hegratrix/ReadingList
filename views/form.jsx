const React = require('react')

const Form = () =>
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <style jsx>{`
            .form-group {
                padding: 13px
            }
            .form-control::placeholder {
                color: white
            }
            `}</style>
        <title>Reading List</title>
    </head>
    <body>
        <div className="container">
            <div className="form-group bg-secondary text-white">
                <form>
                    <div>
                        <label htmlFor="inputTitle">Book Title</label>
                        <input type="text" className="form-control text-white bg-info" id="inputTitle" placeholder="Title" />             
                        </div>
                    <div>
                        <label htmlFor="inputAuthor">Book Author</label>
                        <input type="text" className="form-control bg-info text-white" id="inputAuthor" placeholder="Author" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCount">Page Count</label>
                            <input type="text" className="form-control bg-info text-white" id="inputCount" placeholder="Page Count" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCurrent">Current Page</label>
                            <input type="text" className="form-control bg-info text-white" id="inputCurrent" placeholder="Current Page" />
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="readBefore" />
                        <label className="form-check-label" htmlFor="gridCheck">I read this</label>
                    </div>
                    <button type="submit" id="addBook" className="btn btn-warning">Add Book</button>
                </form>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
    </body>
    </html>

module.exports = Form