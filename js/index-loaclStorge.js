function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}


function deleteFromStorage(id) {
    const books = getGbooks()
    var bookIndx = books.findIndex(book => book.id === id)
    books.splice(bookIndx, 1);
    saveToStorage(STORAGE_KEY, books)
}