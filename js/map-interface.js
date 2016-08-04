// var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  // debugger;
  var geocoder = new google.maps.Geocoder();
  function geocodeAddress(geocoder, resultsMap) {
    var input1 = $("#input1").val();
    // console.log(input1);
    geocoder.geocode({"#input1" : input1}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function initMap() {
    var chicago = {lat: position.coords.latitude, lng: position.coords.longitude};
    var indianapolis = {lat: 39.79, lng: -86.14};

    var map = new google.maps.Map(document.getElementById("showMap"), {
      center: chicago,
      scrollwheel: false,
      zoom: 7
    });

    document.getElementById("submit-btn").addEventListener("click", function() {
      geocodeAddress(geocoder, map);
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    var request = {
      destination: indianapolis,
      origin: chicago,
      travelMode: 'DRIVING'
    };

    var directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
  }
});
