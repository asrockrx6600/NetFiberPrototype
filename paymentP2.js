const inputPlan = document.getElementById('#planoEscolhido')
const buttons = document.querySelectorAll('.buttonP')


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()

        const card = button.closest('.plan-one')

        const speed = card.querySelector('.plan-value').innerText.trim()
        const price = card.querySelector('.plan-price').innerText.trim()

        const planoFinal = `${speed} - ${price}`

        const planoUrl = encodeURIComponent(planoFinal)

        window.location.href = `payment.html?plano=${planoUrl}`
    })
})



/* button.addEventListener('click', () => {
        
})*/


/* // pega o card onde o botão foi clicado
        const cardPlan = button.closest('.plan-one')

        // pega o texto do preço dentro do card
        const price = cardPlan.querySelector('.plan-price').innerHTML

        // envia para o input
        inputPlan.value = price */