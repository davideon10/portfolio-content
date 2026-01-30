 const openMenu = () => {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML = "close"
    } else {
        document.querySelector("header .material-icons").innerHTML = "menu"
    }
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.remove("active");
        document.querySelector("header .material-icons").innerHTML = "menu";
    });
});