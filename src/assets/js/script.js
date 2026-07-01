open_popup.onclick = (e) => {
    e.preventDefault()
    black.classList.add('di-block')
    popup.classList.add('di-block')
    console.log("+")
}

cancel_popup.onclick = (e) => {
    e.preventDefault()
    black.classList.remove('di-block')
    popup.classList.remove('di-block')
}

black.onclick = (e) => {
    e.preventDefault()
    black.classList.remove('di-block')
    popup.classList.remove('di-block')
}