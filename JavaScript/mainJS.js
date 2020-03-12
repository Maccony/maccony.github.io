window.onload = allLoad;
function allLoad(){
	// создадим объект карта (с координатами и zoom) в div элементе
 	myMap = new ymaps.Map("loadMap", {center: [12.244444, 109.192778], zoom: 14, controls: ['rulerControl']},
        {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true});
}
