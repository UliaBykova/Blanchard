let mySwiper1 = new Swiper('.swiper1', {
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  simulateTouch: false,

  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
})

let nextEl1 = document.querySelector('.swiper-button-next-1');
let prevEl1 = document.querySelector('.swiper-button-prev-1');
let actualNumber1 = document.querySelector('.swiper__page-actual1');

nextEl1.addEventListener('click', () => {
  actualNumber1.textContent = +actualNumber1.textContent + 1;
})

prevEl1.addEventListener('click', () => {
  actualNumber1.textContent = +actualNumber1.textContent - 1;
})

let mySwiper2 = new Swiper('.swiper2', {
  spaceBetween: 38,
  slidesPerView: 3,
  simulateTouch: false,
  slidesPerGroup: 2,

  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
})

let nextEl2 = document.querySelector('.swiper-button-next-2');
let prevEl2 = document.querySelector('.swiper-button-prev-2');
let actualNumber2 = document.querySelector('.swiper__page-actual2');

nextEl2.addEventListener('click', () => {
  actualNumber2.textContent = +actualNumber2.textContent + 1;
})

prevEl2.addEventListener('click', () => {
  actualNumber2.textContent = +actualNumber2.textContent - 1;
})

