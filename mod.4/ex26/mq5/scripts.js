const iconmenu = document.querySelector("#menuburguer")
const menu = document.querySelector("#menu")

iconmenu.addEventListener("click", () => {
    if(menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})