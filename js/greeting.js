const welcome = document.querySelector(".welcome_title");
const nameDiv = document.querySelector(".name-div");
const loginForm = nameDiv.querySelector(".login-form");
const loginInput = nameDiv.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit( event ){
    event.preventDefault();

    welcome.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add( HIDDEN_CLASSNAME );

    const username = loginInput.value;
    localStorage.setItem( USERNAME_KEY, username );
    paintGrettings(username);
}

function paintGrettings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem( USERNAME_KEY );

if( savedUsername === null ){
    welcome.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit );
}
else{
    paintGrettings(savedUsername);
}