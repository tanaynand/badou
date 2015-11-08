// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // Getting the map selector in DOM
    var div = document.getElementById("map_canvas");

    // Invoking Map using Google Map SDK v2 by dubcanada
    var map = plugin.google.maps.Map.getMap(div,{
        'camera': {
            'latLng': setPosition(37.7833, -122.4167),
            'zoom': 10
        }
    });

    // Capturing event when Map load are ready.
    map.addEventListener(plugin.google.maps.event.MAP_READY, function(){

        // Defining markers for demo
        var markers = [{
            position: setPosition(37.8197, -122.4786),
            title: "Golden Gate Bridge"
        }, {
            position: setPosition(37.4830, -122.2456),
            title: "Fisherman's Wharf"
        }, {
            position: setPosition(37.7697, -122.4769),
            title: "Golden Gate Park"
        }, {
            position: setPosition(37.8267, -122.4233),
            title: "Alcatraz Island"
        }, {
            position: setPosition(37.7881, -122.4075),
            title: "Union Square"
        }, {
            position: setPosition(37.7941, -122.4077914),
            title: "Chinatown"
        }, {
            position: setPosition(37.8057, -122.4218),
            title: "Ghirardelli Square"
        }, {
            position: setPosition(37.7516, -122.4477),
            title: "Twin Peaks"
        }, {
            position: setPosition(37.7782, -122.3907),
            title: "AT&T Park"     
        }];

        // Bind markers
        for (var i = 0; i < markers.length; i++) {
            map.addMarker({
                'marker': markers[i],
                'position': markers[i].position
            }, function(marker) {

                // Defining event for each marker
                marker.on("click", function() {
                    alert(marker.get('marker').title);
                });

            });
        }
    });

    // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
  });
});

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('map', {
            url: '/map',
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
        })

    $urlRouterProvider.otherwise('/map');
});
