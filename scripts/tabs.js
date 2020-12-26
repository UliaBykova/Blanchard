let tabBtnAll = document.querySelectorAll('.tabs__btn');

tabBtnAll.forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (event) {
    openCurrAccordion();
    tabBtnAll.forEach(function (tabsBtn) {
      if (tabsBtn.parentElement.classList.contains('tabs__item-active')) {
        tabsBtn.parentElement.classList.remove('tabs__item-active');
      };
    })
    const path = event.currentTarget.dataset.path;
    tabsBtn.parentElement.classList.add('tabs__item-active');

    document.querySelectorAll('.accordion__inner').forEach((accContent) => {
      if (accContent.classList.contains('accordion__inner-active')) {
        accContent.classList.remove('accordion__inner-active');
      }
    })
    
    let elemAll = document.querySelectorAll(`[data-target="${path}"]`);
     
    for (let i=0; i < elemAll.length; i++) {
      elemAll[i].classList.add('accordion__inner-active');
    }
  })

})


