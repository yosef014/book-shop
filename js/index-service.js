const STORAGE_KEY = 'bookDB'
var gBooks = _creatBooks()
var gPageIdx = 0
const PAGE_SIZE = 5
var gPageCount =0




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


function setNextPage() {
    gPageIdx++
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0
    }
}

function getBooksForDisplay() {
    const startIdx = gPageIdx * PAGE_SIZE;
    gPageCount = getPageCount();
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE);
}

function getPageCount() {
    var pageCount = Math.ceil(gBooks.length / PAGE_SIZE)
    return pageCount;
}

function setPage(target) {
    if (target === 'prev') {
        if (gPageIdx === 0) return;
        gPageIdx--;
    } else if (target === 'next') {
        if (gPageIdx === gPageCount - 1) return;
        gPageIdx++;
    } else {
        gPageIdx = target;
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}