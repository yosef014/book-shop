const STORAGE_KEY = 'bookDB'
var gBooks = _creatBooks()


function getGbooks() {
    _creatBooks()
    return gBooks
}


function _creatBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            {
                id: 0,
                name: 'Hari poter',
                price: '5.99',
                imgUrl: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'
            },
            {
                id: 1,
                name: 'Shulhan aruh',
                price: '8.99',
                imgUrl: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'
            },
            {
                id: 2,
                name: 'Baba metzia',
                price: '1.99',
                imgUrl: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'
            }
        ]
        saveToStorage(STORAGE_KEY, books)

    }
    return books

}
function addBook(newBookName, newBookPrice) {
    const newBook = {
        id: getRandomIntInclusive(3, 999),
        name: newBookName,
        price: newBookPrice,
        imgUrl: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'
    }
    var books = loadFromStorage(STORAGE_KEY)
    books.push(newBook)
    saveToStorage(STORAGE_KEY, books)
    gBooks = books

}
function updateBook(id, newPrice) {
    var books = loadFromStorage(STORAGE_KEY)
    var book = books.find(book => book.id == id)
    book.price = newPrice
    saveToStorage(STORAGE_KEY, books)
    gBooks = books
}





function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}