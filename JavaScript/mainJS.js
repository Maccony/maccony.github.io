window.onload = allLoad;
function allLoad() {
    busButton.addEventListener('click', function() {
        if (document.getElementById("main").firstChild == null) {
            // создадим объект карта (с координатами и zoom) в div элементе
            myMap = new ymaps.Map("main", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
                {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
        }
    });
}
