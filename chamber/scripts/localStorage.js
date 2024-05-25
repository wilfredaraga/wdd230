const message = document.querySelector('.visitMessage')
const dateToday = new Date();
const day = dateToday.getDate();
const todayinMS = Date.now();
const visitDisplay = document.querySelector('.visitDisplay')


let numVisit = Number(window.localStorage.getItem('numVisit-ls')) || 0;
let visitDay = day;


if (numVisit !== 0) {
    visitDisplay.textContent = numVisit;
} else {
    visitDisplay.textContent = `Welcome! Let us know if you have any questions.`
}

let lastDayVisit = Number(window.localStorage.getItem('lastDayVisit-ls')) || todayinMS;
let visitGap = todayinMS - lastDayVisit;
let visitGapInDays = (visitGap / 86400000).toFixed();
if (visitGap <= 86400000) {
    message.textContent = 'Back so soon! Awesome!';
} else {
    if (visitGapInDays == 1) {
        message.textContent = `You last visited ${visitGapInDays} day ago.`
    } else {
        message.textContent = `You last visited ${visitGapInDays} days ago.`
    }
}

numVisit++;
localStorage.setItem('numVisit-ls', numVisit);
localStorage.setItem('lastDayVisit-ls', todayinMS);



