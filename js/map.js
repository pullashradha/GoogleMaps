// var apiKey = require('./../.env').apiKey;

var createMap = function(cityInput) {
  // Draw map based on default location
  var map = new google.maps.Map(document.getElementById("showMap"), {
    center: {lat: -34.397, lng: 150.644}, //Default location
    scrollwheel: false,
    zoom: 16
  });
  // Update center of map based on inputted city name
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {"address": cityInput}, function(results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

exports.mapModule = createMap;
