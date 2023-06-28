const btnShare = document.querySelector(".btn-share")
const userCard = document.querySelector(".footer__userCard")
const modalUserCard = document.querySelector(".card__shareModal")
const modalBtnShare = document.querySelector(".btnShare")

const cardFooter = document.querySelector(".card__footer")


btnShare.addEventListener('click', () => {
    userCard.style.display = "none"
    modalUserCard.style.display = "flex"
    cardFooter.style.display = "none"
})

modalBtnShare.addEventListener('click', () => {
    modalUserCard.style.display = "none"
    userCard.style.display = "flex"
    cardFooter.style.display = "flex"
})