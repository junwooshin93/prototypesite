const listObj = document.querySelector(".js-nav__list");
const navItemObj = document.querySelector(".js-nav__item");

let isListPoped = false;

function handleMouseOut() {
    listObj.classList.add("hide__nav__list");
}

function handleMouseOver() {
    if (isListPoped === false) {
        listObj.classList.remove("hide__nav__list");
    }
}

function init() {
    navItemObj.addEventListener("mouseout", handleMouseOut);
    navItemObj.addEventListener("mouseover", handleMouseOver);
}

init();
