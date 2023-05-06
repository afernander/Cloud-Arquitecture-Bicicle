var map = L.map('map').setView([6.157728, -75.594198], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var bicycles = JSON.parse(document.currentScript.dataset.var);


console.log(bicycles)

bicycles.forEach(element => {
        var alquilacion = "";
    if(element.alquilada != null){
        if(element.alquilada != ""){
        alquilacion = element.alquilada;
        }else{
            alquilacion = "(ALQUILADA)";
        }
    }
    
    L.marker([element.latitud, element.longitud]).addTo(map)
    .bindPopup(element.id+" "+element.modelo+" "+element.color+" "+alquilacion)
    .openPopup();

});


