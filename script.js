 //API key for currency exhange 

// http://data.fixer.io/api/latest

/* ? access_key = ecc8a2d2f68fa6411af0e18ae84df2aa;
*/

// Function for Google Maps

function initMap() {
    // The location of Tivoli Garden
    const tivoli = {lat: 55.67381073190113, lng: 12.568139473433078};
    // The Map centered on Tivoli
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 7,
        center: tivoli,
    });
    // The marker, positioned at Tivoli
    const marker = new google.maps.Marker({
        position: tivoli,
        map: map,
    });
}