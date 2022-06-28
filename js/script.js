function scrolling () {
    const menu = document.querySelector(".menu");
    if (window.scrollY != 0) {
        menu.classList.add("menu_active");
    } else if (window.scrollY == 0) {
        menu.classList.remove("menu_active");
    }
}

window.addEventListener("scroll", scrolling);

