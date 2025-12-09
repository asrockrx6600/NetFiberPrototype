const whatsapp = document.getElementById('whatsapp')
const instagram = document.getElementById('instagram')
const twitter = document.getElementById('twitter')

const urlWhats = `https://wa.me/5575981535154`
const urlInsta = `https://instagram.com/tnfiber`
const urlTwitter =

whatsapp.addEventListener('click', () => {
    window.open(urlWhats, '_blank')
})
instagram.addEventListener('click', () => {
    window.open(urlInsta, '_blank')
})
twitter.addEventListener('click', () => {
    window.open(urlTwitter, '_blank')
})