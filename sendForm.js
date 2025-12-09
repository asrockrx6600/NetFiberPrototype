const form = document.getElementById('form1')
const btnForm = document.getElementById('btnForm')
const warningMsg = document.querySelector('.warningMsg')


btnForm.addEventListener('click', () => {

    const campos = form.querySelectorAll('input, textarea')

    for (const campo of campos) {
        if (!campo.checkValidity()) {
            warningMsg.classList.add('active')
            return // impede que a execução do código avance
        }
    }

    const nameSend = document.getElementById('name').value
    const sobrenomeSend = document.getElementById('sobrenome').value
    const emailSend = document.getElementById('email').value
    const textarea = document.getElementById('textarea').value

    const msg = `Olá, meu nome é ${encodeURIComponent(nameSend)} ${encodeURIComponent(sobrenomeSend)} e eu gostaria de tirar uma dúvida: ${encodeURIComponent(textarea)}. Gostaria de receber atualizações e informações importantes no meu e-mail: ${encodeURIComponent(emailSend)}.`

    const numero = '5575981535154'

    const url = `https://wa.me/${numero}?text=${msg}`

    window.open(url, '_blank')

    location.reload()
})