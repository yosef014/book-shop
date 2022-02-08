

function init() {

    renderTableBooks()

}


function renderTableBooks() {
    const books = getBooksForDisplay();
    const strHtmls = books.map(book =>
        `<tr>
        <th>${book.id}</th>
        <th>${book.name}</th>
        <th>${formatCurrency(book.price)}</th>
        <th><button class="btn btn-success" data-trans="read" onclick="onReadClicked(${book.id})">read</button>
        </th>
        <th><button class="btn btn-warning" data-trans="update" onclick="onUpdateClicked(${book.id})">update</button>
        </th>
        <th><button class="btn btn-danger" data-trans="delete" onclick="ondeleteClicked(${book.id})">delete</button>
        </th>
    </tr>`
    )
    var elTbody = document.querySelector('.table-books-body')
    elTbody.innerHTML = strHtmls.join('')
    setLang(gCurrLang)
    renderPageBtns();
}

function onReadClicked(id) {

    var books = loadFromStorage(STORAGE_KEY)
    var book = books.find(book => book.id == id)
    var elbookName = document.querySelector('.book-name')
    var elbookPrice = document.querySelector('.book-price')
    var elbookImg = document.querySelector('.modal2 img')
    elbookName.innerText = book.name
    elbookPrice.innerText = book.price
    elbookImg.src = book.imgUrl;

    var elmodal = document.querySelector('.modal2')
    elmodal.classList.toggle("open");

}

function onUpdateClicked(id) {
    var newPrice = prompt("Please enter new price");
    updateBook(id, newPrice)
    renderTableBooks()

}

function ondeleteClicked(id) {
    deleteFromStorage(id)
    renderTableBooks()

}

function onAddNewBook() {
    var newBookName = prompt("Please enter new book name");
    var newBookPrice = prompt("Please enter new book price");
    addBook(newBookName, newBookPrice)


    renderTableBooks()



}

function onSetLang(langVal) {
    setLang(langVal);
    if (langVal === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    renderTableBooks()
    doTrans()
}

function onCloseModal() {
    var elmodal = document.querySelector('.modal2')
    elmodal.classList.toggle("open");
}
function onNextPage() {
    setNextPage()
}
function setPageBtnsHTMLs() {
    var strHTMLs = ''
    for (var i = 0; i < gPageCount; i++) {
        var buttonSize = (i === gPageIdx) ? 'btn-lg' : 'btn-sm'
        strHTMLs += `<button class="page-${i} ${buttonSize} btn-primary m-2" onclick="onSetPage(${i})">${(i + 1)}</button>`
    }
    return strHTMLs
}

function renderPageBtns() {
    var strHTMLs = setPageBtnsHTMLs();
    var elNextBtn = document.querySelector('.next-page');
    var elPrevBtn = document.querySelector('.prev-page');

    document.querySelector('.page-numbers').innerHTML = strHTMLs
    var elCurrPageBtn = document.querySelector(`.page-${gPageIdx}`)
        // elCurrPageBtn.classList.add('btn-lg')
}

function onSetPage(targetPage) {
    setPage(targetPage);

    renderTableBooks();
}
