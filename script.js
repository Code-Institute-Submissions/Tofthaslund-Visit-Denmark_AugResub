 //API key for currency exhange 

// http://data.fixer.io/api/latest

/* ? access_key = ecc8a2d2f68fa6411af0e18ae84df2aa;
*/

// Function for Google Maps

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(55.718128720581475, 10.17928751598598),
        zoom: 7
    });

    const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
        info: {
            icon: iconBase + "info-i_maps.png",
        }
    }

    const locations = [
        {
            position: new google.maps.LatLng(55.67380508131984, 12.568093454381403),
            type: "info",
        },
        {
            position: new google.maps.LatLng(55.77534740144054, 12.577889415758227),
            type: "info",
        },
    ];

    //Create markers
    for(let i = 0; i < locations.length; i++){
        const marker = new google.maps.Marker({
            position: locations[i].position,
            icon: icons[locations[i].type].icon,
            map: map,
        });
    }
}


