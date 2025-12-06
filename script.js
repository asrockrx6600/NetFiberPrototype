 const reveal = document.querySelectorAll('.justify, .contact, .escolha-planos, .plans-grid, .fibra-optica, .footer')

const observer = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
        entrada.target.classList.add('active') // aparece ao entrar

    } else {
        entrada.target.classList.remove('active') //some ao sair
    }

    })
}, { threshold: 0.2 }) // limite: 20% visível quando ativada

reveal.forEach(el => observer.observe(el))




const carrossel = document.querySelector('.plans-grid')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click', () => {
    carrossel.scrollBy({ left: 200, behavior: "smooth" })
})

prev.addEventListener('click', () => {
    carrossel.scrollBy({ left: -200, behavior: "smooth" })
})