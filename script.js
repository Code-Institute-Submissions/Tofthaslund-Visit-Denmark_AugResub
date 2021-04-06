 //API key for currency exhange 

// http://data.fixer.io/api/latest

/* ? access_key = ecc8a2d2f68fa6411af0e18ae84df2aa;
*/

// Function for Google Maps

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {lat: 55.60012186704416, lng: 9.740083483716866}
    });

const tourist = [
    [{ lat: 55.67384138148071, lng: 12.568372404399566 }, "Tivoli Garden" ],
    [{ lat: 55.672536335486996, lng: 12.521637048581432 }, "Copenhagn Zoo"],
    [{ lat: 55.742854035512835, lng: 9.132106277507289 }, "LegoLand"],
    [{ lat: 56.1588064799222, lng:10.192522894633301 }, "The Old City"]
];

const infoWindow = new google.maps.InfoWindow();

//create markers.
tourist.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
    });

marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(marker.getTitle());
    infoWindow.open(marker.getMap(), marker);
    });
});
}


