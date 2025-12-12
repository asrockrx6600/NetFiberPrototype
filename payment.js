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



const selectPagamento = document.getElementById('select')

const boxCard = document.getElementById('box-card')
const boxPix = document.getElementById('box-pix')
const boxBoleto = document.getElementById('box-boleto')

function esconderTodos() {
    [boxCard, boxPix, boxBoleto].forEach(box => {
        box.classList.add('hidden')
        box.classList.remove('flex')
    })
}

selectPagamento.addEventListener('change', () => {
    esconderTodos()

    const type = selectPagamento.value

    if (type === 'card') {
        boxCard.classList.remove('hidden')
        boxCard.classList.add('flex')
    }

    if (type === 'pix') {
        boxPix.classList.remove('hidden')
        boxPix.classList.add('flex')
    }

    if (type === 'boleto') {
        boxBoleto.classList.remove('hidden')
        boxBoleto.classList.add('flex')
    }
})



const msg = document.getElementById('warningMsg')
const input = document.querySelectorAll('input')
const form = document.getElementById('form')

form.addEventListener('click', () => {
    
})
