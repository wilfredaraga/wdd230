const memberHighlight = document.createElement('div');
const highlight = document.querySelector('.highlight');

const highlightUrl = 'https://wilfredaraga.github.io/wdd230/chamber/data/member.json';
async function getMembers() {
    try {
        const response = await fetch(highlightUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayMember(data.companies[3]);
            displayMember(data.companies[1]);
            displayMember(data.companies[2]);
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
    const logo = document.createElement('img');
    const h3 = document.createElement('h3');
    const addressP = document.createElement('p');
    const phoneP = document.createElement('p');
    const link = document.createElement('a');
    const memberLevelP = document.createElement('p');
    const employeeNum = document.createElement('p');
    const section = document.createElement('section');

    logo.setAttribute('src', data.image);
    logo.setAttribute('alt', data.name);
    h3.textContent = data.name;
    addressP.textContent = data.address;
    phoneP.textContent = data.phoneNumber;
    link.setAttribute('href', data.websiteURL);
    link.textContent = data.websiteURL;
    memberLevelP.textContent = data.membershipLevel;
    employeeNum.textContent = data.otherInformation;

    section.appendChild(logo);
    section.appendChild(h3);
    section.appendChild(addressP);
    section.appendChild(phoneP);
    section.appendChild(link);
    section.appendChild(memberLevelP);
    section.appendChild(employeeNum);

    memberHighlight.appendChild(section);
    highlight.appendChild(memberHighlight);


}

function getRanNum() {
    let ranNum = Math.floor(Math.random() * 7);
    return ranNum;
}