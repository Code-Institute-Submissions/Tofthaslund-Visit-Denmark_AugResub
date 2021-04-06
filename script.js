 //API key for currency exhange 

// http://data.fixer.io/api/latest

/* ? access_key = ecc8a2d2f68fa6411af0e18ae84df2aa;
*/

// Function for Google Maps

function initMap() {
    const myLatLng = { lat: 55.60012186704416, lng: 9.740083483716866 };
    const tivoli = { lat: 55.67384138148071, lng: 12.568372404399566 };
    const cphzoo = { lat: 55.672536335486996, lng: 12.521637048581432 };
    const legoland = { lat: 55.742854035512835, lng: 9.132106277507289 };
    const aahby = { lat: 56.1588064799222, lng:10.192522894633301 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: tivoli,
      map,
      title: "Tivoli Garden",
    });
    new google.maps.Marker({
        position: cphzoo,
        map,
        title: "Tivoli Garden",
      });
      new google.maps.Marker({
        position: legoland,
        map,
        title: "Tivoli Garden",
      });
      new google.maps.Marker({
        position: aahby,
        map,
        title: "Tivoli Garden",
      });
  }
  
  

