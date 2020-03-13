window.onload = allLoad;
function allLoad(){
    document.getElementById("NhaTrang").addEventListener('click', function(e) {
        // создадим объект карта (с координатами и zoom) в div элементе
        myMap = new ymaps.Map("loadMap", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
            {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
        document.bodu.remove("leftGrid");
        document.getElementById("loadMap").style.gridColumn = '1/3';
        //document.getElementById("loadMap").style.gridRow = '2/3';
    }, false);
}
