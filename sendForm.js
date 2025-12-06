const form = document.getElementById('form1')
const btnForm = document.getElementById('btnForm')
const warningMsg = document.querySelector('.warningMsg')

/* btnForm.addEventListener('click', () => {
    
}) */


btnForm.addEventListener('click', () => {

    const campos = form.querySelectorAll('input, select')

    for (const campo of campos) {
        if (!campo.checkValidity()) {
            warningMsg.classList.add('active')
            return // impede que a execução do código avance
        }
    }

    const nameSend = document.getElementById('name').value
    const telSend = document.getElementById('tel').value
    const emailSend = document.getElementById('email').value
    const planSend = document.getElementById('select').value
    const textarea = document.getElementById('textarea').value

    const msg = `Olá, meu nome é ${encodeURIComponent(nameSend)} e eu gostaria de contratar o plano de ${encodeURIComponent(planSend)}. Utilizo atualmente este e-mail para contato: ${encodeURIComponent(emailSend)}. ${encodeURIComponent(textarea)}`

    const numero = '5575981535154'

    const url = `https://wa.me/${numero}?text=${msg}`

    window.open(url, '_blank')

    location.reload()
})