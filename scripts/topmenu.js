(function () {
  let menu = document.querySelector('.menu');
  let liAll = menu.querySelectorAll('.submenu');

  document.addEventListener("click", (event) =>{
    for (i = 0; i < liAll.length; i++) {
      if (liAll[i].classList.contains('open')) {
        liAll[i].classList.remove('open');
      }
    }
    let li = event.target.closest('li');
    if (!li) return;
    let submenu = li.querySelector('.submenu');
    submenu.classList.add('open');
  })

  document.addEventListener('keyup', (event) => {
    focused = document.querySelector(":focus");
    if ((event.key == 'Tab') && (focused.classList.contains('topmenu__item'))) {
      focused.addEventListener('keyup', (event) => {
        if ((event.key == 'Enter')) {
          for (i = 0; i < liAll.length; i++) {
            if (liAll[i].classList.contains('open')) {
              liAll[i].classList.remove('open');
            }
          }
          let submenu = focused.querySelector('.submenu');
          submenu.classList.add('open');
        }
      })
    }
  })

})();
