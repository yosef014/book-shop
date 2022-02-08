var gCurrLang = 'en';
var gCurrCurrency = 'usd';
var gTrans = {
    title: {
        en: 'yosef\'s book-shop',
        he: 'הסיפרייה של יוסף'
    },
    id: {
        en: 'id',
        he: 'מספר',
    },
    'title-table': {
        en: 'title',
        he: 'שם הספר',
    },
    'price': {
        en: 'price',
        he: 'מחיר'
    },
    'read': {
        en: 'read',
        he: 'פתח',
    },
    'update': {
        en: 'updte',
        he: 'עדכן',
    },
    'delete': {
        en: 'delete',
        he: 'מחק',
    },
    'book-name': {
        en: 'book-name:',
        he: 'שם הספר:',
    },
    'book-price': {
        en: 'book-price',
        he: 'מחיר הספר:',
    },
    'create-new-book': {
        en: 'create new book',
        he: 'הוסף ספר חדש',
    }

}


function setLang(lang) {
    gCurrLang = lang;
    if (lang == 'he') gCurrCurrency = 'ILS'
    else gCurrCurrency = 'USD'
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')

    els.forEach((el) => {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.placeholder = txt
        } else el.innerText = txt
    })
}
function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function formatCurrency(num) {
    return new Intl.NumberFormat(gCurrLang, { style: 'currency', currency: gCurrCurrency }).format(num);
}