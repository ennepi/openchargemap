var map;
var marker = null;



//LOADING MAP
function load_map() {


    map = L.map('mapid', { zoomControl: false }).setView([41.9055688, 12.4659426], 13);

    L.control.zoom({
        position: 'bottomleft'
    }).addTo(map);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmtwIiwiYSI6ImNqcXBjajg1aDAwNmw0M24ya3Y3azgyb2YifQ.6VAH3nW-oDBjiXAb-KfoKg', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);



}

//GEOLOCATION
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

    marker = L.marker([position.coords.latitude, position.coords.longitude], { icon: myIcon }).addTo(map);



}

//GEOLOCATION
window.onload = load_map;

//LOADING MAP

//SHOWSPINNER


function showSpinner() {
    document.getElementById("Spinner").classList.remove('loader');

}

//SHOWSPINNER 



//MODAL CALL AND TOAST

M.toast({ html: 'Welcome to Open Charge Map!' })


$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('.tooltipped').tooltip();
});

//MODAL CALL AND TOAST

//APICALL

$(document).ready(function () {

    const Url = 'https://api.openchargemap.io/v2/poi/?output=json&countrycode=IT&latitude=41.9055688&longitude=12.4659426&maxresults=1900&compact=true&verbose=true';


    $.ajax({
        url: Url,
        type: "GET",
        success: function (result) {
            setTimeout(function () { M.toast({ html: 'Remember to share your position!' }) }, 2500);
            result.forEach(function (el) {
                let lat = el.AddressInfo.Latitude,
                    lon = el.AddressInfo.Longitude,
                    name = el.AddressInfo.Title,
                    power = el.Connections[0].PowerKW;



                var chargeicon = L.icon({
                    iconUrl: 'https://image.flaticon.com/icons/svg/926/926731.svg',
                    iconSize: [38, 95],
                    iconAnchor: [22, 73],
                });


                if (power == null) {
                    tower = L.marker([lat, lon], { icon: chargeicon }).bindTooltip("" + name).addTo(map);
                } else {
                    tower = L.marker([lat, lon], { icon: chargeicon }).bindTooltip("" + name + "  " + power + "KW").addTo(map);
                }

                if (lat == el.AddressInfo.Latitude) {
                    document.getElementById("Spinner").classList.remove('loader')
                }




                tower.on('click', function () {


                    L.Routing.control({



                        waypoints: [
                            A = marker.getLatLng(),
                            B = L.latLng(lat, lon),
                        ],
                        router: L.Routing.mapbox('pk.eyJ1IjoibmtwIiwiYSI6ImNqcXBjajg1aDAwNmw0M24ya3Y3azgyb2YifQ.6VAH3nW-oDBjiXAb-KfoKg')


                    })
                        .addTo(map);
                    map.removeLayer(marker);
                    setTimeout(function () { M.toast({ html: 'Move Marker for change destination!' }) }, 3500);



                    $('.leaflet-right').removeClass('leaflet-right').addClass('leaflet-left');
                    $('.leaflet-top').removeClass('leaflet-top')



                });




            })

        },
        error: function (error) {
            console.log("errore")
        }
    })

})

//APICALL



