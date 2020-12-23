let datas = document.querySelectorAll('.topmenu__submenu');

datas.forEach((item) => {
    if (item.children.length > 4) {
        new SimpleBar(item)
    }
})
