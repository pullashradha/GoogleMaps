var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  $.get("http://maps.google.com/maps/api/js?key=" + apiKey + "&callback=initMap", function initMap() {
    var chicago = {lat: 41.85, lng: -87.65};
    var indianapolis = {lat: 39.79, lng: -86.14};

    var map = new google.maps.Map(document.getElementById('showMap'), {
      center: chicago,
      scrollwheel: false,
      zoom: 7
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    // Set destination, origin and travel mode.
    var request = {
      destination: indianapolis,
      origin: chicago,
      travelMode: 'DRIVING'
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      }
    });
  });
});



// var addresses = [];
//
// $.get("http://calagator.org/events").then(function(address){
//   address
// });
//
// //User Functions
// function geolocationSuccess(position) {
//   var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//   var myOptions = {
//     zoom : 16,
//     center : userLatLng,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   };
//   var mapObject = new google.maps.Map(document.getElementById("showMap"), myOptions);
//   new google.maps.Marker({
//     map: mapObject,
//     position: userLatLng
//   });
// }
//
// function locateUser() {
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 1000 * 1000
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
//
// //Geolocation Error Function
// function geolocationError(positionError) {
//   alert(positionError);
// }

// $(document).ready(function() {
//   function initMap() {
//     var chicago = {lat: 41.85, lng: -87.65};
//     var indianapolis = {lat: 39.79, lng: -86.14};
//
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: chicago,
//       scrollwheel: false,
//       zoom: 7
//     });
//
//     var directionsDisplay = new google.maps.DirectionsRenderer({
//       map: map
//     });
//
//     // Set destination, origin and travel mode.
//     var request = {
//       destination: indianapolis,
//       origin: chicago,
//       travelMode: 'DRIVING'
//     };
//
//     // Pass the directions request to the directions service.
//     var directionsService = new google.maps.DirectionsService();
//     directionsService.route(request, function(response, status) {
//       if (status == 'OK') {
//         // Display the route on the map.
//         directionsDisplay.setDirections(response);
//       }
//     });
//   }
// });

//
//
// $(document).ready(function() {
//   $("#userLocation").click(locateUser);
// });
