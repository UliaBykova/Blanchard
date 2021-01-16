    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {

      var myMap = new ymaps.Map("map", {
        center: [55.76207780232767,37.645206591576354],
        zoom: 14,
        controls: []
      });

      myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {
        hintContent: 'Москва, Леонтьевский переулок, дом 5, строение 1'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/iconMap.png',
        iconImageSize: [20, 20],
      })

      myMap.geoObjects.add(myPlacemark);

      myMap.controls.add('geolocationControl', {
        size: 'small',
        float: 'none',
        position: {
          bottom: '310px',
          right: '0px'
        }
      });

      myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
          bottom: '363px',
          right: '0px'
        }
      });
    }
