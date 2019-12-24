const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); // 기본 이벤트 동작하지 않도록 함
    const curValue = input.value;
    paintGreeting(curValue);
    saveName(curValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const curUser = localStorage.getItem(USER_LS);
    if (curUser === null) {
        askForName();
    } else {
        paintGreeting(curUser);
    }
}

function init() {
    loadName();
}

init();