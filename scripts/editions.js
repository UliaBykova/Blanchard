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

  })();
