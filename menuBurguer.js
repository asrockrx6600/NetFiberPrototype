const hamburguer = document.getElementById('hamburguer')
const menu = document.getElementById('menu')

hamburguer.addEventListener('click', (e) => {
    e.stopPropagation()
    hamburguer.classList.toggle('active')
    menu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    const clicouFora = !menu.contains(e.target) && !hamburguer.contains(e.target)

    if (clicouFora) {
        hamburguer.classList.remove('active')
        menu.classList.remove('active')
    }
})