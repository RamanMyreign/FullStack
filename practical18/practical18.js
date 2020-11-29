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
    if(username.value === ''){
        showError(username, "Username required");
    }
    else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, "Username required");
    }
    else{
        showSuccess(username);
    }
    if(password1.value === ''){
        showError(password1, "Username required");
    }
    else{
        showSuccess(username);
    }
    if(password2.value === ''){
        showError(password2, "Username required");
    }
    else{
        showSuccess(username);
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

}