const fetch = window.fetch

document.querySelector('#updateBook').addEventListener('click', event => {
    event.preventDefault()
    fetch(`/books/${event.target.getAttribute('data-id')}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
        title: document.querySelector('#editTitle').value,
        author: document.querySelector('#editAuthor').value,
        pages: document.querySelector('#editCount').value,
        current: document.querySelector('#editCurrent').value,
        isRead: document.querySelector('#editReadBefore').checked
        })
    })
    .then(r => {
        console.log(r)
        window.location = './list'
    })
        .catch(e => console.error(e))
})