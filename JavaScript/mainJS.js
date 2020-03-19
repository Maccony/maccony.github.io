window.onload = allLoad;
function allLoad() {
    var busRoutes = {2: null, 3: null, 4: null, 5: null};
    one.addEventListener('click', function(event) {
        if (document.getElementById("main").firstChild == null) {
            // создадим объект карта (с координатами и zoom) в div элементе
            myMap = new ymaps.Map("main", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
                {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
        }
        var routeN = event.target.id;
        if (+routeN > 0) {
            if (busRoutes[routeN] == null) { busRoutes[routeN] = makeRoute(routeN);
                myMap.geoObjects.add(busRoutes[routeN]);}
            else {myMap.geoObjects.remove(busRoutes[routeN]); busRoutes[routeN] = null;}
        }
        if (event.target.id == 'clear') myMap.geoObjects.removeAll();
    });
    two.addEventListener('click', function(event) {
        if (document.getElementById("main").firstChild == null) {
            // создадим объект карта (с координатами и zoom) в div элементе
            myMap = new ymaps.Map("main", {center: [52.265374, 104.393120], zoom: 14, controls: ['rulerControl']},
                {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
        }
        var onHouses = true;
    	var collectionHouses = new ymaps.GeoObjectCollection({}, {preset: 'islands#blueStretchyIcon'});
    	collectionHouses.add(new ymaps.Placemark([52.262570, 104.406215], {iconContent: "пеленгатор"}));
    	collectionHouses.add(new ymaps.Placemark([52.261955, 104.409009], {iconContent: "СКП-297"}));

        if (event.target.id == 'placeMark') {
            if (onHouses) {myMap.geoObjects.add(collectionHouses); onHouses = false;}
			else {myMap.geoObjects.remove(collectionHouses); onHouses = true;}
        }
    });
}
