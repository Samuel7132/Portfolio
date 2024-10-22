const form = document.getElementById("userform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// Success Outline
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Validate email
function checkEmail (input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }   else {
        showError(input, 'invalid Email')
    }
}

// Validate requires fields
function checkRequired (inputArr) {
    let isRequired = false;
    inputArr.forEach (function(input) {
        if (input.value.trim()=== '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        }   else{
            showSuccess(input);
        }
    })

    return isRequired;
}

// check input length
function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError (
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    }   else if (input.valur.length > max) {
        showError (
            input,
            `${getFieldName(input)} must be at least ${max} characters`
        );
    }   else {
        showSuccess (input);
    }
}

// Match password
function checkPasswordsMatch (input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get fieldName
function getFieldName (input) {
    return input.id.charAT(0).toUppercase() + input.id.slice(1);
} 

// Event Listners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 20);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }

});