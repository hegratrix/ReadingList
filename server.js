const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.set('views', (path.join(__dirname, 'views')))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))