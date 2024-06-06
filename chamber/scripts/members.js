const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const displayCompanies = document.querySelector('#displayCompanies');

gridButton.addEventListener('click', () => {
    displayCompanies.classList.add('grid');
    displayCompanies.classList.remove('list');
    gridButton.style.background = '#86deb7';
    listButton.style.background = '#63b995';
});

listButton.addEventListener('click', () => {
    displayCompanies.classList.add('list');
    displayCompanies.classList.remove('grid');
    gridButton.style.background = '#63b995';
    listButton.style.background = '#86deb7';
});

const url = 'https://wilfredaraga.github.io/wdd230/chamber/data/member.json';
async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayMember(data.companies);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getMembers();

function displayMember(data) {
    data.forEach((member) => {
        const logo = document.createElement('img');
        const h3 = document.createElement('h3');
        const addressP = document.createElement('p');
        const phoneP = document.createElement('p');
        const link = document.createElement('a');
        const memberLevelP = document.createElement('p');
        const employeeNum = document.createElement('p');
        const section = document.createElement('section');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', member.name);
        h3.textContent = member.name;
        addressP.textContent = member.address;
        phoneP.textContent = member.phoneNumber;
        link.setAttribute('href', member.websiteURL);
        link.textContent = member.websiteURL;
        memberLevelP.textContent = member.membershipLevel;
        employeeNum.textContent = member.otherInformation;

        section.appendChild(logo);
        section.appendChild(h3);
        section.appendChild(addressP);
        section.appendChild(phoneP);
        section.appendChild(link);
        section.appendChild(memberLevelP);
        section.appendChild(employeeNum);

        displayCompanies.appendChild(section);
    });
}