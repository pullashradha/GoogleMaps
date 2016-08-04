// var apiKey = require('./../.env').apiKey;

var createMap = function(originInput, destinationInput) {
  // Draw map based on default location
  var map = new google.maps.Map(document.getElementById("showMap"), {
    center: {lat: 45.5207049, lng: -122.6795911}, //Default location at Epicodus
    scrollwheel: false,
    zoom: 16
  });
  // Update center of map based on inputted city name
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {"address": originInput}, {"address": destinationInput},function(results, status) {
console.log(originInput);
console.log(destinationInput);
    if (status === "OK") {
      map.setCenter(originInput);
      var marker = new google.maps.Marker({
        map: map,
        position: {lat: originInput.coords.latitude, lng: originInput.coords.longitude}
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
  var request = {
    destination: destinationInput,
    origin: originInput,
    travelMode: "WALKING"
  };
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == "OK") {
      directionsDisplay.setDirections(response);
    }
  });
};

exports.mapModule = createMap;
