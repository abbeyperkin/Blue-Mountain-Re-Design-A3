function openModalBackground() {
    if (screen.width >= 800) return
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
    
    
    openModalBackground();
    
    searchMenu.classList.remove("close-menu");
    searchMenu.classList.add("open-menu");
    searchBar.focus();
}
    
function closeSearchMenu() {
    const searchMenu = document.getElementById("search-menu");
    
    closeModalBackground();
    
    searchMenu.classList.remove("open-menu");
    searchMenu.classList.add("close-menu");
}
    
function openShoppingBag() {
        const shoppingBag = document.getElementById("shopping-bag");
        
        openModalBackground();
        
        shoppingBag.classList.remove("close-menu");
        shoppingBag.classList.add("open-menu");
        
}

function closeShoppingBag() {
    const shoppingBag = document.getElementById("shopping-bag");
    
    closeModalBackground();
    
    shoppingBag.classList.remove("open-menu");
    shoppingBag.classList.add("close-menu");
}

function openSuperMenu() {
    const superMenu = document.getElementById("superMenu");

    superMenu.classList.remove("close-menu")
}
    
function closeSuperMenu() {
    const superMenu = document.getElementById("superMenu");

    superMenu.classList.add("close-menu")

}

function onSearch(){
    const searchQuery = document.getElementById('search-bar-input').value;
    window.location.href = "results/?search=" + searchQuery;
}

// TODO: cite https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
var accordion = document.getElementById("accordion").childNodes;
console.log(accordion)
var i;
for (i = 1; i < accordion.length; i+=2) {
    console.log('accordion[i]', accordion[i].classList)
    accordion[i].addEventListener("click", function() {
        console.log("CLICKED")
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
        panel.style.display = "none";
        } else {
        panel.style.display = "flex";
        }
    });
}
