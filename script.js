

// Function for Google Maps

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {lat: 55.60012186704416, lng: 9.740083483716866}
    });

    // The locations of the picked tourist acctractions
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


//Currency converter 
// declared variables
const from_currency01 = document.getElementById('from_currency')
const from_ammount02 = document.getElementById('from_ammount')
const to_currency03 = document.getElementById('to_currency')
const to_ammount04 = document.getElementById('to_ammount')
const rate06 = document.getElementById('rate');

//Add eventlistener
from_currency01.addEventListener('change', calculate);
from_ammount02.addEventListener('input', calculate);
to_currency03.addEventListener('change', calculate)
to_ammount04.addEventListener('input', calculate);

//function for currency cunvertor

function calculate() {
    const from_currency = from_currency01.value;
    const to_currency = to_currency03.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency];
        to_ammount04.value = (from_ammount02.value * rate).toFixed(2);
        })
}

calculate();



// javascript for collapsible addmission fees

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    // add eventlister with click funtion
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else{
            content.style.display = "block";
        }
    });
}


// email contact page

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event){
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'lasse ';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Great, we will be in touch')
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});