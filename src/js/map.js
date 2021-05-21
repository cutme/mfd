const loadGoogleMapsApi = require('load-google-maps-api');

document.addEventListener('DOMContentLoaded',function() {
    
    const obj = document.getElementById('map');
    let mapenable = false, int;

    const initMap = function() {
        loadGoogleMapsApi({
            key: 'AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY'
            }).then(function (googleMaps) {
        
            const mapStyle = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-25"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
            
            const el = document.getElementById('map'),
                  lat = Number(el.getAttribute('data-lat')),
                  lng = Number(el.getAttribute('data-lng')),
                  myLatLng = new google.maps.LatLng(lat, lng);
        
            var map = new googleMaps.Map(el, {
                center: myLatLng,
                styles: mapStyle,
                disableDefaultUI: true,
                zoom: 14
            })            

        }).catch(function (error) {
            console.error(error)
        })
    };
    
    obj ? initMap() : false;
    
}, false);


