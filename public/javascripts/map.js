var map = L.map("main_map").setView([6.157728, -75.594198], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution:
'&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap contributors',
}).addTo(map);

L.marker([6.157728, -75.594198]).addTo(map);
L.marker([6.157728, -75.594198]).addTo(map);

/* const Bicicleta = require("../models/Bicicleta");


Bicicleta.allBicis.forEach(element => {
     L.popup()
    .setLatLng([element.ubicacion[0], element.ubicacion[1]])
    .setContent(element.id)
    .openOn(map);
}); */

