window.onload = allLoad;
function allLoad(){
	// создадим объект карта (с координатами и zoom) в div элементе
 	myMap = new ymaps.Map("divForMap", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
        {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
    var myPoint = new ymaps.Placemark([12.226631, 109.199601], {hintContent: 'отель Balcony' },
        {preset: 'islands#greenHotelIcon', iconShadow: true, iconImageSize: 1});
    myMap.geoObjects
        .add(myPoint)
        .add(new ymaps.Placemark([12.228035, 109.200315], {hintContent: 'Dream Beach Pool', iconContent: "бассейн"},
            {preset: 'islands#blueStretchyIcon'}));

	var busRoutes = {2: null, 3: null, 4: null, 5: null};
	//обработка события 'click' на элементе 'listRoutes'
	document.getElementById("listRoutes").addEventListener('click', function(e) {
		var selectXY = document.elementFromPoint(e.clientX, e.clientY);
		if (selectXY.tagName == 'A') {
			var routeN = selectXY.id;
			if (busRoutes[routeN] == null) { busRoutes[routeN] = makeRoute(routeN);
				myMap.geoObjects.add(busRoutes[routeN]);}
			else {myMap.geoObjects.remove(busRoutes[routeN]); busRoutes[routeN] = null;}
		}
	}, false);
	myMap.events.add('click', function (e) { // Получение координат щелчка
    		var coords = e.get('coords');
    		alert(coords.join(', '));
	});
}
