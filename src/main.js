import './assets/styles/style.sass'

const black = document.querySelector("#black")
const nav = document.querySelectorAll(".navigation")

nav.forEach(navItem => {
    const open_popup = navItem.querySelector(".open_popup")
    const cancel_popup = navItem.querySelector(".cancel_popup")
    const popup = navItem.querySelector(".popup")

    open_popup.addEventListener("click", function(e){
        e.preventDefault()
        black.classList.add('di-block')
        popup.classList.add('di-block')
        cancel_popup.classList.add('di-block')
        console.log("+")
    })

    function closeBurger(e) {
        e.preventDefault()
        black.classList.remove('di-block')
        popup.classList.remove('di-block')
    }

    cancel_popup.addEventListener("click", closeBurger)
    black.addEventListener("click", closeBurger)
})