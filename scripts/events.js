(function () {

let btnEvents = document.querySelector('.events__all-btn');
let hiddenBlocks  = document.querySelector('.events__all-blocks');

btnEvents.addEventListener('click', () => {
  hiddenBlocks.classList.add('open-block');
  btnEvents.style.display = "none";
})


})();
