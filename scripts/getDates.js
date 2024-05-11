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
    main.classList.toggle('darkMode')
})