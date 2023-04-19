// hover price card

const priceCards = document.querySelectorAll('.price')

for (let i = 0; i < priceCards.length; i++) {

  priceCards[i].addEventListener('mouseover', (e) => {
    if (!priceCards[i].classList.contains('active')) {

      for (let j = 0; j < priceCards.length; j++) {
        if (priceCards[j].classList.contains('active')) {
          priceCards[j].classList.remove('active')
        }
      }
      priceCards[i].classList.add('active')
    }
  })

  priceCards[i].addEventListener('mouseout', () => {
    priceCards[i].classList.remove('active')
    priceCards[1].classList.add('active')
  })
}


// function from swipe

const swiper = new Swiper('.pricing__list', {
  // Optional parameters
  spaceBetween: 10, 
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 'auto',
  centeredSlidesBounds: true,
  loop: false,
  breakpoints: {
    561: {
      spaceBetween: 20,
    },
    769: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 30, 
    }
  },
});


// function show burger-menu

const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header__list_mobile') 
function burgerMenuAnime(value) {

  burgerMenu.style.opacity = value
}
let timeoutAnime = null;

burger.addEventListener('click', (e) => {
  e.preventDefault()

  burger.classList.toggle('active')

  if (burger.classList.contains('active')) {
    burgerMenu.classList.add('active')

    burgerMenuAnime(0)

    timeoutAnime = setTimeout(burgerMenuAnime, 150, 1)
  } else {
    timeoutAnime = setTimeout(burgerMenuAnime, 150, 0)

    let timeoutRemove = setTimeout(() => {
      burgerMenu.classList.remove('active')
    }, 1000)
  }
})


// scroll to animation

document.addEventListener('DOMContentLoaded', () => {

  const showElems = document.querySelectorAll('.show')

  function handlerScrollItem() {
    showElems.forEach((el, i) => {

      if (el.getBoundingClientRect().y - el.offsetHeight <= 100 && el.getBoundingClientRect().y >= -200) {
        el.classList.add('animation') 
      } else {
        el.classList.remove('animation')
      }
    })
  }

  handlerScrollItem()

  window.addEventListener('scroll', () => {
    handlerScrollItem()
  }, false)
})
