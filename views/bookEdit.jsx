const React = require('react')
const Buttons = require('./navButtons')
const Form = require('./editForm')
const Fragment = React.Fragment

const Book = props =>
    <Fragment>
        <Buttons />
        <Form title={props.title} author={props.author} current={props.current} pages={props.pages} read={props.isRead}/>
    </Fragment>
    
module.exports = Book