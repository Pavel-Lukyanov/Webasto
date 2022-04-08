// Карта
ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [61.262021, 73.458142],
                zoom: 17,
            });
            var myPlacemark = new ymaps.Placemark([61.262021, 73.458142], {}, {
                iconLayout: 'default#image',
                iconImageSize: [35, 42],
                iconImageOffset: [-3, -42],
            });
            myMap.geoObjects.add(myPlacemark);
        }

