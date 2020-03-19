window.onload = allLoad;
function allLoad() {
    // создадим объект карта (с координатами и zoom) в div элементе
    myMap = new ymaps.Map("main", {center: [30.243380, 166.667695], zoom: 14, controls: ['rulerControl']},
        {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
    var busRoutes = {2: null, 3: null, 4: null, 5: null};
    var onHouses = true;
    var collectionHouses = new ymaps.GeoObjectCollection({}, {preset: 'islands#blueStretchyIcon'});
        collectionHouses.add(new ymaps.Placemark([52.262570, 104.406215], {iconContent: "пеленгатор"}));
        collectionHouses.add(new ymaps.Placemark([52.261955, 104.409009], {iconContent: "СКП-297"}));

    zero.addEventListener('click', function() {resetMap(0, [30.243380, 166.667695]);});
    one.addEventListener('click', function(event) {
        resetMap(1, [12.244444, 109.192778]);
        var routeN = event.target.id;
        if (+event.target.id > 0) {
            if (busRoutes[routeN] == null) { busRoutes[routeN] = makeRoute(routeN);
                myMap.geoObjects.add(busRoutes[routeN]);}
            else {myMap.geoObjects.remove(busRoutes[routeN]); busRoutes[routeN] = null;}
        }
        if (event.target.id == 'clear') myMap.geoObjects.removeAll();
    });
    two.addEventListener('click', function(event) {
        resetMap(1, [52.265374, 104.393120]);
        if (event.target.id == 'placeMark') {
            if (onHouses) {myMap.geoObjects.add(collectionHouses); onHouses = false;}
			else {myMap.geoObjects.remove(collectionHouses); onHouses = true;}
            console.log(onHouses);
        }
    });
}
function resetMap (opacityMap, centerMap) {
    main.style.opacity = opacityMap;
    myMap.geoObjects.removeAll();
    myMap.setCenter(centerMap, 14);
}
