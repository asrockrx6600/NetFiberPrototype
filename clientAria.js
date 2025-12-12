const input = document.getElementById('cpf')

input.addEventListener('input', () => {
    let v = input.value.replace(/\D/g, '')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    input.value = v
})

document.getElementById('form').addEventListener('submit', (e) => {
    const digits = input.value.replace(/\D/g, '')

    if (digits.length !==11) {
        // impede envio
        e.preventDefault()
        // força navegador a exibir a mensagem de erro
        input.setCustomValidity('Digite todos os dígitos.')
        input.reportValidity()
    } else {
        input.setCustomValidity('') // limpa erro
    }
})