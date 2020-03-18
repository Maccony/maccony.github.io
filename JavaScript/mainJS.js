window.onload = allLoad;
function allLoad() {
    var busRoutes = {2: null, 3: null, 4: null, 5: null};
    document.querySelector('#busButton').addEventListener('click', function(event) {
        if (document.getElementById("main").firstChild == null) {
            // создадим объект карта (с координатами и zoom) в div элементе
            myMap = new ymaps.Map("main", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
                {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
        }
        console.log(event.target.id);
    });
}
