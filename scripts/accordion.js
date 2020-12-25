(function() {
	
let headings = document.querySelectorAll('.accordion__heading');

for(let i = 0; i < headings.length; i++) {
	headings[i].addEventListener('click', openCurrAccordion);
}

//Если нужно, чтобы открывалось несколько списков
function openAccordion(e) {
	let parent = this.parentElement;
	let article = this.nextElementSibling;
	
	if (!parent.classList.contains('open')) {
		parent.classList.add('open');
		article.style.maxHeight = article.scrollHeight + 'px';
	}
	else {
		parent.classList.remove('open');
		article.style.maxHeight = '0px';
	}
}

//Если нужно, чтобы открывался один

function openCurrAccordion(e) {
	for(let i = 0; i < headings.length; i++) {
		let parent = headings[i].parentElement;
		let article = headings[i].nextElementSibling;

		if (this === headings[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			article.style.maxHeight = '0px';
		}
	}
}

})();