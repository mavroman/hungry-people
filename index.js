const buttonscroll = document.querySelector('.button-scroll');
const aboutRest = document.querySelector('.about-rest')

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,  // вычисляем сколько от этого элемента до верха страницы
        behavior: 'smooth'  // плавная прокрута или быстрая  

    })
}

buttonscroll.addEventListener('click', () => {
    scrollTo(aboutRest)
})