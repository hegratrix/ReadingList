const fetch = window.fetch

document.querySelector('#addBook').addEventListener('click', event => {
    event.preventDefault()
    fetch('/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            id: document.querySelector('#inputTitle').value,
            title: document.querySelector('#inputTitle').value,
            author: document.querySelector('#inputAuthor').value,
            pages: document.querySelector('#inputCount').value,
            currentPage: document.querySelector('#inputCurrent').value,
            isRead: document.querySelector('#readBefore').checked
        })
    })
    .then(r => {
        console.log(r)
        document.querySelector('#inputTitle').value = ''
        document.querySelector('#inputAuthor').value = ''
        document.querySelector('#inputCount').value = ''
        document.querySelector('#inputCurrent').value = ''
        document.querySelector('#readBefore').checked = false
    })
    .catch(e => console.error(e))
})