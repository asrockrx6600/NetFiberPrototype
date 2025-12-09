const cardNumber = document.getElementById('cardNumber')
const validate = document.getElementById('validate')


cardNumber.addEventListener('input', () => {
    let valor = cardNumber.value.replace(/\D/g, '')
    valor = valor.substring(0, 16)

    valor = valor.replace(/(\d{4})(?=\d)/g, '$1 ')

    cardNumber.value = valor
})

validate.addEventListener('input', () => {
    let valor = validate.value.replace(/\D/g, '')

    if (valor.length >= 3) {
        validate.value = valor.substring(0, 2) + '/' + valor.substring(2, 4)
    } else {
        validate.value = valor
    }
})