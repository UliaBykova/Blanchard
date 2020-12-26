let headings = document.querySelectorAll('.accordion__heading');
let accordion = document.querySelector('.accordion');

for (let i = 0; i < headings.length; i++) {
  headings[i].addEventListener('click', openCurrAccordion);
}

for (let i = 0; i < headings.length; i++) {
	headings[i].addEventListener('keyup', enterAccordion);
  }


//Если нужно, чтобы открывалось несколько списков
function openAccordion(event) {
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

//Если нужно, чтобы открывался один

function openCurrAccordion(event) {
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

 function enterAccordion(event) {
	focused = document.querySelector(":focus");
	if ((event.key == 'Tab') && focused.classList.contains('accordion__subtitle')) {
	  let parent = focused.parentNode.parentNode;
	  let article =  parent.querySelector('.accordion__body');

	  this.addEventListener('keydown', (event) => {
		if ((event.key == 'Enter') && (!parent.classList.contains('open'))  ) {
		  parent.classList.add('open');
		  article.style.maxHeight = article.scrollHeight + 'px';
		} else {
		  parent.classList.remove('open');
		  article.style.maxHeight = '0px';
		}
	  })
	}
 }