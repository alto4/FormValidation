// Cache DOM Elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// FUNCTIONS
// showError Function - show input error message
function showError(input, message) {
  // get the input parent element and add the associated error class
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // get the small element
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// showSuccess Function - show successful entry by changing colour
function showSuccess(input) {
  // get the input parent element and add the associated success class
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// checkEmail Function - check if email is valid using a JS regex
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Please enter a valid email address.");
  }
}

// checkRequired Function - check required fields
function checkRequired(inputArray) {
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i].value === "") {
      showError(
        inputArray[i],
        `${getFieldName(inputArray[i])} is a required field.`
      );
    } else {
      showSuccess(inputArray[i]);
    }
  }
}

// checkLength Function - check the length of input to verify its is between min and max number of characters
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters in length.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} cannot be greater than ${max} characters.`
    );
  }
}

// checkPasswordsMatch Function - compare both the password and passwordConfirm to ensure they were entered the exact same
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match. Please try again.");
  }
}

// getFieldName Function - get the name of the field and convert to propercase for validation error messages
function getFieldName(input) {
  // use charAt() method to isolate the first character and convert it to uppercase
  // then append the rest of the word back to the capitalized first character using the slice method
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS
// Event Listener - handles submit button click event
form.addEventListener("submit", function (e) {
  // Prevent default timeout of submit button
  e.preventDefault();

  // Pass in all elements for validation using an array, rather than call the function repeatedly on different elements
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
