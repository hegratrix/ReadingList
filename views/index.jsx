const React = require('react')
const Form = require('./form')
const Buttons = require('./navButtons')

const Page = () =>
<html lang="en">
<head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <title>Reading List</title>
    <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossOrigin='anonymous' />
</head>
<body>
    <Buttons />
    <Form />
    <script src='/js/index.js' type='application/javascript' />
</body>
</html>

module.exports = Page