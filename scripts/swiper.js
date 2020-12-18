let mySwiper = new Swiper('.swiper-container', {
  spaceBetween : 50,
/*   initialSlide : 6, */
  slidesPerView : 3,
  slidesPerColumn: 2,
  slidesPerGroup : 3,
  simulateTouch : false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

let nextEl = document.querySelector('.swiper-button-next');
let prevEl = document.querySelector('.swiper-button-prev');
let actualNumber = document.querySelector('.swiper__page-actual');

nextEl.addEventListener('click', () => {
  actualNumber.textContent = +actualNumber.textContent+1;
})

prevEl.addEventListener('click', () => {
  actualNumber.textContent = +actualNumber.textContent-1;
})


