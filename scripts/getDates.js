const d = new Date()
document.querySelector('#year').innerHTML = d.getFullYear();

let dateModified = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = `Last Modification: ${dateModified}`;