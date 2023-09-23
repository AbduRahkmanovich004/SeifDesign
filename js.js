let navbar = document.querySelector("nav")
let x = document.querySelector(".fa-xmark")
let drop = document.querySelector(".fa-bars")
let overly = document.querySelector(".overly")

const openNav = () => {
    overly.classList.remove("hidden")
    x.classList.remove("hidden")
    navbar.classList.add("nav")
    drop.classList.add("hidden")
}
const closeNav = () => {
    overly.classList.add("hidden")
    x.classList.add("hidden")
    navbar.classList.remove("nav")
    drop.classList.remove("hidden")
}

drop.addEventListener("click",openNav)
x.addEventListener("click",closeNav)
overly.addEventListener("click",closeNav)