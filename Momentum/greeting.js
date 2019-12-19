const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const FROM_CN = "from";

function paintGreeting(text) {
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {

    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();