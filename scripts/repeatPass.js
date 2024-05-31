const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const message = document.querySelector('#formMessage');

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = '❗Password do not match!';
        message.style.visibility = 'show';
        pass2.style.backgroundColor = '#ffd0d9';
        pass2.value = '';
        pass2.focus();
    } else {
        message.style.display = 'none';
        pass2.style.backgroundColor = '#eee';
        pass2.style.color = '#000';
    }
}

pass2.addEventListener('focusout', checkSame);