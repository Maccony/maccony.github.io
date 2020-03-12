window.onload = allLoad;
function allLoad(){
	// создадим объект карта (с координатами и zoom) в div элементе
 	myMap = new ymaps.Map("divForMap", {center: [52.265374, 104.393120], zoom: 14, controls: ['rulerControl']},
        {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
	
	var onHouses = true;
	var collectionHouses = new ymaps.GeoObjectCollection({}, {preset: 'islands#blueStretchyIcon'});
	collectionHouses.add(new ymaps.Placemark([52.262570, 104.406215], {iconContent: "пеленгатор"}));
	collectionHouses.add(new ymaps.Placemark([52.261955, 104.409009], {iconContent: "СКП-297"}));
	
	var myRectangle = new ymaps.Rectangle([[52.262185, 104.405229], [52.262633, 104.406653]]);
    	myMap.geoObjects.add(myRectangle); 
	
	var collectionPoligons = new ymaps.GeoObjectCollection({}, {});
	for (let i = 1; i < 7; i++) {let myPol = makeObjects(i);
		collectionPoligons.add(myPol);}
	myMap.geoObjects.add(collectionPoligons);

	//обработка события 'click' на элементе 'listRoutes'
	document.getElementById("listRoutes").addEventListener('click', function(e) {
		var selectXY = document.elementFromPoint(e.clientX, e.clientY);
		if (selectXY.tagName == 'A') {
			var routeN = selectXY.id;
			if (onHouses) {myMap.geoObjects.add(collectionHouses); onHouses = false;}
			else {myMap.geoObjects.remove(collectionHouses); onHouses = true;}
		}
	}, false);
	myMap.events.add('click', function (e) { // Получение координат щелчка
    		var coords = e.get('coords');
    		alert(coords.join(', '));
	});
}
