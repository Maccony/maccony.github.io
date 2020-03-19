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
        console.log(routeN);
        console.log(typeof routeN);
        if (typeof routeN == 'number') {
            if (busRoutes[routeN] == null) { busRoutes[routeN] = makeRoute(routeN);
                myMap.geoObjects.add(busRoutes[routeN]);}
            else {myMap.geoObjects.remove(busRoutes[routeN]); busRoutes[routeN] = null;}
        }
    });
}
