const rangeValue = document.querySelector('#rangevalue');
const range = document.querySelector('#rating');

function displayRating() {
    rangeValue.innerHTML = range.value;
}

range.addEventListener('change', displayRating);
range.addEventListener('input', displayRating);
