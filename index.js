const menuIcon = document.getElementById("navbar-toggler");

menuIcon.addEventListener("click", toggleMenu);

// to open or close mobile menu
function toggleMenu(){
    const menu = document.querySelector(".menu");

    // when the menu button is clicked, open the menu if it is closed
    if (menu.classList.contains("hide")){
        // menu slides in
        menu.classList.remove("hide");
        menuIcon.firstChild.src = "images/icon-close.svg";
    } else {
        // close the menu if it is already opened when the 
        // menu button is clicked
        menu.classList.add("hide");
        menuIcon.firstChild.src = "images/icon-hamburger.svg";
    }
}