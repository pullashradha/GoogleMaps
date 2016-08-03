var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap', function initMap() {
    var mapDiv = document.getElementById("showMap");
    var mapCoordinates = {
      center: {lat: 45.5231, lng: -122.6765},
      zoom: 8
    }
    var map = new google.maps.Map(mapDiv, mapCoordinates);
  });
});
