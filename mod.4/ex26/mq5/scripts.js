const iconmenu = document.querySelector("#iconburguer")
const menu = document.querySelector("#menu")


iconmenu.addEventListener("click", () => {
    if(menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

// window.addEventListener("resize", () => {
//     if(window.innerWidth >= 768) {
//         menu.style.display = "block"
//     }
// })

