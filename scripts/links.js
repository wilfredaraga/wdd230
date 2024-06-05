const baseURL = 'https://wilfredaraga.github.io/wdd230/';
const linksURL = 'https://wilfredaraga.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const activity = document.querySelector('#activity');
function displayLinks(data) {
    data.forEach((perWeek) => {
        const li = document.createElement('li');
        li.textContent = `${perWeek.week}`;

        perWeek.links.forEach((link) => {
            const a = document.createElement('a');
            a.textContent = `${link.title}`;
            a.setAttribute('href', link.url);
            li.innerHTML = `${a} |`
        })

        activity.appendChild(li);
    });
}