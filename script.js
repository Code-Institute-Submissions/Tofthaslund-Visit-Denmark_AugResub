 //API key for currency exhange 

// http://data.fixer.io/api/latest

/* ? access_key = ecc8a2d2f68fa6411af0e18ae84df2aa;
*/

// Function for Google Maps

// function initMap() {
//     {
//     // The location of Tivoli Garden
//     const tivoli = {lat: 55.67381073190113, lng: 12.568139473433078};
//     // The Map centered on Tivoli
//     const map = new google.maps.Map(document.getElementById("map"),{
//         zoom: 7,
//         center: tivoli,
//     });
//     // The marker, positioned at Tivoli
//     const marker = new google.maps.Marker({
//         position: tivoli,
//         map: map,
//     });
// }
// }

var locations = [
    ['Tivoli Garden', 55.67381073190113, 12.568139473433078, 4],
    ['LegoLand', 55.73617509671368, 9.126426344705168, 3],
    ['Bakken', 55.77533533280311, 12.577739212056098, 2],
    ['The Old City', 56.158914026402215, 10.192158113918602, 1]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(55.68098180958544, 9.937588301590827),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});