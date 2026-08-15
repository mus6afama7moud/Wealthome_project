'user strict'

// navbar toggle in mobile

const $navbar = document.querySelector("[data-navbar]")
const $navToggler = document.querySelector("[data-nav-toggler]")

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"))

// Something I don't want, but for learning

const $header = document.querySelector("[data-header]")

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})