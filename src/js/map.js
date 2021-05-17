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
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d3d3d3"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#b3b3b3"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ];
            
            const el = document.getElementById('map'),
                  lat = Number(el.getAttribute('data-lat')),
                  lng = Number(el.getAttribute('data-lng')),
                  myLatLng = new google.maps.LatLng(lat, lng);
        
            var map = new googleMaps.Map(el, {
                center: myLatLng,
                styles: mapStyle,
                disableDefaultUI: true,
                zoom: 11
            })
            
            var image = {
                url: './img/icons/pin.png',
                scaledSize: new google.maps.Size(31, 42), // scaled size
                origin: new google.maps.Point(0,0), // origin
                //anchor: new google.maps.Point(50, 20) // anchor
            }
               
            // Marker with image
            var beachMarker = new google.maps.Marker({
                position: myLatLng,
                animation: google.maps.Animation.DROP,
                map: map,
                icon: image
            });
            
            
            // Cloud with address

            const address =
            '<div class="c-map__address">' +
            '<img src="img/assets/logo-leasingujesz.svg" alt="leasingujesz" width="124" height="16">' +
            '<p>Rzeszów 35-005</p>' +
            '<p>ul.Siemiradzkiego 15/4</p>' +
            '<p><a href="tel:0048531531531">+48 531 531 531</a></p>' +
            '<p><a href="tel:0048123456789">+48 12 345 67 89</a></p>' +
            "</div>";
            
            const infowindow = new google.maps.InfoWindow({
                content: address,
            });
            
           
            infowindow.open(map, beachMarker);

        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        // Fire when show in viewport
        
        clearInterval(int); // for better performance
    
        int = setInterval(function() {
            let bottomOfObject = obj.getBoundingClientRect().top + 200,
            bottomOfWindow = window.innerHeight;
    
            if ( bottomOfWindow > bottomOfObject ) {
                if (mapenable === false) {
                    initMap();
                    console.log('fire map');
                    mapenable = true;
                }
        	}

        }, 50);        
    }
    
    obj ? window.addEventListener('scroll', init) : false;
    
}, false);


