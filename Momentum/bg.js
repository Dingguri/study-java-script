const body = document.querySelector("body");

const IMG_NUMVER = 3;

function paintImage(imgNumber) {
    const img = new Image();
    img.src = `./Images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMVER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();