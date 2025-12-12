const numero = '5575981535154'

document.querySelectorAll('.buttonP').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.plan-one')
        const plano = card.querySelector('.plan-value').innerText

        const msg = `Olá, tudo bem? Gostaria de contratar o plano de ${plano}. Poderia me passar mais algumas informações?`
        const encoded = encodeURIComponent(msg)
        const url = `https://wa.me/${numero}?text=${encoded}`

        window.open(url, '_blank')
    })
})