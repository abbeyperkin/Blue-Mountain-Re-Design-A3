function openModalBackground() {
    const modalBackground = document.getElementById("modal-background");

    document.body.classList.add("not-scrollable");

    modalBackground.classList.remove("close-menu");
    modalBackground.classList.add("open-menu");
}

function closeModalBackground() {
    const modalBackground = document.getElementById("modal-background");

    document.body.classList.remove("not-scrollable");

    modalBackground.classList.add("close-menu");
    modalBackground.classList.remove("open-menu");
}

function closeAllMenus() {
    const menu = document.getElementById("sidebar");
    const searchMenu = document.getElementById("search-menu");

    closeModalBackground()

    menu.classList.remove("open-menu");
    menu.classList.add("close-menu");

    searchMenu.classList.remove("open-menu");
    searchMenu.classList.add("close-menu");
}

function openMenu() {
    const menu = document.getElementById("sidebar");

    openModalBackground();

    menu.classList.remove("close-menu");
    menu.classList.add("open-menu");
}

function closeMenu() {
    const menu = document.getElementById("sidebar");

    closeModalBackground();

    menu.classList.remove("open-menu");
    menu.classList.add("close-menu");
}

function openSearchMenu() {
    const searchMenu = document.getElementById("search-menu");
    const searchBar = document.getElementById('search-bar-input')

    searchBar.focus();

    openModalBackground();

    searchMenu.classList.remove("close-menu");
    searchMenu.classList.add("open-menu");
}

function closeSearchMenu() {
    const searchMenu = document.getElementById("search-menu");

    closeModalBackground();

    searchMenu.classList.remove("open-menu");
    searchMenu.classList.add("close-menu");
}
