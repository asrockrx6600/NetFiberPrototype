const html = document.documentElement
const theme = document.getElementById('theme')
const themeMobile = document.getElementById('themeMobile')

const temaSalvo = localStorage.getItem('theme')
    if (temaSalvo) {
        html.setAttribute('data-theme', temaSalvo)
    }

theme.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme')
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark'

    html.setAttribute('data-theme', novoTema)
    localStorage.setItem('theme', novoTema)
})

themeMobile.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme')
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark'

    html.setAttribute('data-theme', novoTema)
    localStorage.setItem('theme', novoTema)
})