var map;
var marker = null;
var a = null;
var b = null;


function load_map() {


    map = L.map('mapid').setView([41.9055688, 12.4659426], 13);

    $('.leaflet-top').removeClass('leaflet-top').addClass('leaflet-bottom');

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmtwIiwiYSI6ImNqcXBjajg1aDAwNmw0M24ya3Y3azgyb2YifQ.6VAH3nW-oDBjiXAb-KfoKg', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);


}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        if (marker !== null) {
            map.removeLayer(marker)
        }
   
        

    }
}

function showPosition(position) {
    map.panTo(L.latLng(position.coords.latitude, position.coords.longitude));

    if (marker !== null) {
        map.removeLayer(marker)
    }

    var myIcon = L.icon({
        iconUrl: 'https://image.flaticon.com/icons/svg/708/708971.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 73],
    });

    marker = L.marker([position.coords.latitude, position.coords.longitude],{icon: myIcon}).addTo(map);

     

}

window.onload = load_map;

//SHOWSPINNER
 

function showSpinner() {
    document.getElementById("Spinner").classList.remove('loader');
      
}

//SHOWSPINNER 


//MODAL CALL AND TOAST

M.toast({html: 'Welcome to Open Charge Map!'})
 
setTimeout(function(){  M.toast({html: 'Remember to share your position!'}) }, 5000);

$(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  
//MODAL CALL AND TOAST