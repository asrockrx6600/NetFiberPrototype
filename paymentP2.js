const inputPlan = document.querySelectorAll('planoEscolhido')
const buttons = document.querySelectorAll('.plan-one-button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // pega o card onde o botão foi clicado
        const cardPlan = button.closest('.plan-one')

        // pega o texto do preço dentro do card
        const price = cardPlan.querySelector('.plan-price').innerHTML

        // envia para o input
        inputPlan.value = price
    })
})