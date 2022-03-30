// THIS METHOD WILL QUALIFY PASSWORD AND EMAIL IN THE MOMENT (ONCHANGE EVENT) ~ 
// ALTERNATE APPROACH WOULD BE TO HAVE THE SUBMIT BUTTON ALWAYS BE CLICKABLE AND THAT RUNS THE QUALIFICATION
// WHICH WILL YIELD ERROR FEEDBACK FOR BOTH FIELDS IS APPLICABLE

let regexEmail = /^([a-zA-Z0-9_\-\+.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
let regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let regExeightChar = /.{8,}/;
let regExcapLetter = /[A-Z]{1,}/;
let regExoneNum = /[0-9]{1,}/;
let eightCharEl = ;
let capLetterEl = ;
let specCharEl = ;
let emailValid, passValid;
function checkForm(e) {
console.log(e)
debugger;
}

function passValidate() {
    
}

function validateEmail() {
    let valEmailMsg = document.getElementById('valEmailMsg');
    let email = document.getElementById('email');

    if (!regexEmail.test(email.value)) {
        email.setAttribute('style', 'border: 1px solid #FF0000;');
        valEmailMsg.innerHTML = 'Enter a valid email';
        emailValid = false;
    }  else {
        email.removeAttribute('style', 'border: 1px solid #FF0000;');
        valEmailMsg.innerHTML = '';
        emailValid = true;
    }
}

function validatePassword() {
    let valPassMsg = document.getElementById('valPassMsg');
    let password = document.getElementById('password');

    if (!regexPass.test(password.value)) {
        password.setAttribute('style', 'border: 1px solid #FF0000;');
        valPassMsg.innerHTML = 'Enter a valid password';
        passValid = false;
    } else {
        password.removeAttribute('style', 'border: 1px solid #FF0000;');
        valPassMsg.innerHTML = '';
        passValid = true;
    }
    finalTest();
}

function finalTest() {
    if (emailValid == true && passValid == true) {
        document.getElementById('submit').disabled = false;
    }
}