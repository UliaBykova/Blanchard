let headings = document.querySelectorAll('.accordion__heading');
let accordion = document.querySelector('.accordion');
let accDropdownAll = document.querySelectorAll('.accordion__dropdown-container');

for (let i = 0; i < headings.length; i++) {
  headings[i].addEventListener('click', openCurrAccordion);
}

//Если нужно, чтобы открывалось несколько списков
function openAccordion() {
  let parent = this.parentElement;
  let article = this.nextElementSibling;

  if (!parent.classList.contains('open')) {
    parent.classList.add('open');
    article.style.maxHeight = article.scrollHeight + 'px';
  } else {
    parent.classList.remove('open');
    article.style.maxHeight = '0px';
  }
}

//Если нужно, чтобы открывался один список
function openCurrAccordion() {
  for (let i = 0; i < headings.length; i++) {
    let parent = headings[i].parentElement;
    let article = headings[i].nextElementSibling;

    if (this === headings[i] && !parent.classList.contains('open')) {
      parent.classList.add('open');
      article.style.maxHeight = article.scrollHeight + 'px';
    } else {
      parent.classList.remove('open');
      article.style.maxHeight = '0px';
    }
  }
}

//ENTER

accordion.addEventListener('keyup', (event) => {
  if (event.key == 'Tab') {

    let parent = event.target.closest('.accordion__dropdown-container');
    let article = parent.querySelector('.accordion__body');
    focused = parent.querySelector(":focus");

    if (parent.classList.contains('open')) {
      this.addEventListener('keydown', (event) => {
        if ((event.key == 'Enter') && (focused.classList.contains('accordion__icon'))) {
/*           let accordionInner = parent.querySelector('.accordion__inner-active');
          if (accordionInner) { */
            parent.classList.remove('open');
            article.style.maxHeight = '0px';
/*             accordionInner.classList.remove('accordion__inner-active');
          } */
        }
      })
    }

    if ((!parent.classList.contains('open')) && focused.classList.contains('accordion__subtitle')) {
      this.addEventListener('keydown', (event) => {
        let parent1 = event.target.closest('.accordion__dropdown-container');
        if ((event.key == 'Enter')) {
/*           let accordionInner = parent.querySelector('.accordion__inner-active');
          if (accordionInner) { */
            parent1.classList.add('open');
            article.style.maxHeight = article.scrollHeight + 'px';
/*             accordionInner.classList.add('accordion__inner-active');
          } */
        }
      })
    }

  }
})
