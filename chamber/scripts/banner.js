const closeButton = document.querySelector('#close');
const banner = document.querySelector('#banner');

closeButton.addEventListener('click', () => {
    banner.classList.toggle('exit');
})