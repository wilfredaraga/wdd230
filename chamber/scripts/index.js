const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');
const searchBox = document.querySelector('.searchBox');
const contactUs = document.querySelector('.contactUs')

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    mainnav.classList.toggle('show');
    searchBox.classList.toggle('show');
    contactUs.classList.toggle('show');
})

const d = new Date()
document.querySelector('#year').innerHTML = d.getFullYear();

let dateModified = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = `Last Modification: ${dateModified}`;

const timestamp = document.querySelector('#timestamp');

timestamp.textContent = d;
console.log(timestamp);