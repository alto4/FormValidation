// Cache DOM Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// FUNCTIONS

// showError Function - show input error message
function showError(input, message) {
    // get the input parent element and add the associated error class
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    // get the small element
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// showSuccess Function - show successful entry by changing colour
function showSuccess(input) {
    // get the input parent element and add the associated success class
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Event Listener - handles submit button click event
form.addEventListener('submit', function (e) {

    // Prevent default timeout of submit button 
    e.preventDefault();

    // Check if username field has been set
    if (username.value === '') {
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
    }

    // Check if email field has been set
    if (email.value === '') {
        showError(email, 'Email address is required.');
    } else {
        showSuccess(email);
    }

    // Check if password field has been set
    if (password.value === '') {
        showError(password, 'Password is required.');
    } else {
        showSuccess(password);
    }

    // Verify that password confirmation matches entered password in previous field;
    if (password2.value === '') {
        showError(password2, 'This field must match the previously entered password.');
    } else {
        showSuccess(password2);
    }
});