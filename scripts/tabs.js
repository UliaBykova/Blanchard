document.addEventListener('DOMContentLoaded', function () {

  let tabBtnAll =  document.querySelectorAll('.tabs__btn');

  tabBtnAll.forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function (event) {
      tabBtnAll.forEach(function (tabsBtn) {
        if (tabsBtn.parentElement.classList.contains('tabs__item-active')) {
          tabsBtn.parentElement.classList.remove('tabs__item-active');
        }; 
      })
      const path = event.currentTarget.dataset.path;  
      tabsBtn.parentElement.classList.add('tabs__item-active');

      document.querySelectorAll('.tabs__content').forEach((tabContent) => {
        if (tabContent.classList.contains('tabs__content-active')) {
          tabContent.classList.remove('tabs__content-active');
        }
      })

      let elem = document.querySelector(`[data-target="${path}"]`);
      elem.classList.add('tabs__content-active');
    })

  })
})
