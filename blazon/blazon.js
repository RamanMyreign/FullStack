// selectors

const form = document.getElementById('signup-form');
const username = document.getElementById('signup-username');
const email = document.getElementById('signup-email');
const password1 = document.getElementById('signup-password');
const submit = document.getElementById('register');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput();
})

var x=0;
var y=0;
var z=0;


function checkInput(){
    if(username.value.trim() === ''){
        showError(username, "Username can't be blank");
    }
    else if(!isUsernameValid(username.value)){
        showError(username, "Username is invalid");
    }
    else{
        showSuccess(username);
        x='1';
    }
    if(email.value === ''){
        showError(email, "Email field can't be blank");
    }
    else if(!isEmailValid(email.value)){
        showError(email,"Email is not valid")
    }
    else{
        showSuccess(email);
        y='1';
    }
    if(password1.value.trim() === ''){
        showError(password1, "Password can't be empty");
    }
    else{
        showSuccess(password1);
        z='1';
    }
    if(x=='1' && y=='1' && z=='1'){
        myFunction()
    }
   
}


function myFunction() {
    location.replace("https://ramanmyreign.github.io/FullStack/blazon/upload.html");
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
    return /^([A-Za-z0-9_]+)$/.test(username);
}