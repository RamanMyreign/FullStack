// selectors

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const submit = document.querySelector('submit');



form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput();
})

function checkInput(){
    if(username.value.trim() === ''){
        showError(username, "Username can't be blank");
    }
    else if(!isUsernameValid(username.value)){
        showError(username, "Username is invalid");
    }
    else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, "Email field can't be blank");
    }
    else if(!isEmailValid(email.value)){
        showError(email,"Email is not valid")
    }
    else{
        showSuccess(email);
    }
    if(password1.value.trim() === ''){
        showError(password1, "Password field can't be empty");
    }
    else{
        showSuccess(password1);
    }
    if(password2.value.trim() === ''){
        showError(password2, "this field can't be empty");
    }
    else if(password1.value !== password2.value ){
        showError(password2, "Password is not same as previous");
    }
    else{
        showSuccess(password2);
    }
}


function showError(input, msg){
  const form_div = input.parentNode;
  form_div.className = 'form-div error';
  const small = form_div.querySelector('small');
  small.innerHTML = msg;

}

function showSuccess(input){
    const form_div = input.parentNode;
  form_div.className = 'form-div success';
  const small = form_div.querySelector('small');
  small.innerHTML = '';

}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username){
    return /^([a-z0-9_]+)$/.test(username);
}