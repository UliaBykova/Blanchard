(function () {

  let btnEvents = document.querySelector('.events__all-btn');
  let allBlocks = document.querySelectorAll('.events__block');

  for (let i = 3; i < allBlocks.length; i++) {
    allBlocks[i].style.display = "none";
  }

  btnEvents.addEventListener('click', () => {
    for (let i = 3; i < allBlocks.length; i++) {
      allBlocks[i].style.display = "block";
      btnEvents.style.display = "none";
    }
  })

})();
