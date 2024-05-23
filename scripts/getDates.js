const d = new Date()
document.querySelector('#year').innerHTML = d.getFullYear();

let dateModified = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = `Last Modification: ${dateModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})


const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
    main.classList.toggle('darkMode');
})

const visitDisplay = document.querySelector('.visitDisplay');

let numVisit = Number(window.localStorage.getItem('numVisit-ls')) || 0;

if (numVisit !== 0) {
    visitDisplay.textContent = numVisit;
} else {
    visitDisplay.textContent = `This is your first visit.`;
}

numVisit++;
localStorage.setItem('numVisit-ls', numVisit);