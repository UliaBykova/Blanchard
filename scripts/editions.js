(function () {

  let checkbox = document.querySelector('.checkbox');

  checkbox.addEventListener('click', (event) => {
    let input = event.target.closest('input');
    if (!input) return;
    if (input.checked) {
      input.parentNode.style.color = "#C283F3";
    } else {
      input.parentNode.style.color = "#fff";
    }
  })

  checkbox.addEventListener('keyup', (event) => {
    if (event.key == 'Tab') {
      let elem = event.target.closest(":focus");
      if (elem.classList.contains('checkbox__label')) {
        elem.addEventListener('keyup', (event) => {
          if (event.key == 'Enter') {
            let input = elem.querySelector('input');
            if (input.checked) {
              input.removeAttribute('checked');
              input.parentNode.style.color = "#fff";
            } else {
              input.setAttribute('checked', '');
              input.parentNode.style.color = "#C283F3";
            }
          }
        })
      }
    }
  })

})();
