/* (function () { */
let mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
/*     initialSlide : 1, */
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  simulateTouch: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

let nextEl = document.querySelector('.swiper-button-next');
let prevEl = document.querySelector('.swiper-button-prev');
let actualNumber = document.querySelector('.swiper__page-actual');
let wrapper = document.querySelector('.swiper-wrapper');


/* document.addEventListener('keyup', (event) => {
  let focused = document.querySelector(":focus");
  let str = String(wrapper.style.transform);
  if ((event.key == 'Tab') && (focused.classList.contains('swiper-slide'))) {
     i++;
     if (i === 6 || i === 12) {
       console.log(i);
      actualNumber.textContent = +actualNumber.textContent + 1;
     }
     i = 0;
  }
}) */


nextEl.addEventListener('click', () => {
  actualNumber.textContent = +actualNumber.textContent + 1;
})

prevEl.addEventListener('click', () => {
  actualNumber.textContent = +actualNumber.textContent - 1;
})



/* })(); */
