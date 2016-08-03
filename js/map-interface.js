var apiKey = require('./../.env').apiKey;

//User Functions
function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.DIRECTIONS
  };
  var mapObject = new google.maps.Map(document.getElementById("showMap"), myOptions);
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function locateUser() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 1000 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

//Geolocation Error Function
function geolocationError(positionError) {
  alert(positionError);
}

//Destination Functions
function destinationSuccess(destinationLat, destinationLng) {
  var destinationLat = new google.maps.Lat(destinationLat.coords.latitude);
  var destinationLng = new google.maps.Lng(destinationLng.coords.longitude)
  var myOptions = {
    zoom : 16,
    center : destinationLat, destinationLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  var mapObject = new google.maps.Map(document.getElementById("showMap"), myOptions);
  new google.maps.Marker({
    map: mapObject,
    destination: destinationLatLng
  });
}

function locateDestination() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 1000 * 1000
    };
    navigator.geolocation.getCurrentPosition(destinationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

//Direction Functions
// var directionsDisplay = new google.maps.DirectionsRenderer({
//   map: map
// });
//
// var request = {
//   destination: destinationLatLng,
//   origin: userLatLng,
//   travelMode: 'WALKING'
// };
//
// var directionsService = new google.maps.DirectionsService();
// directionsService.route(request, function(response, status) {
//   if (status == 'OK') {
//     directionsDisplay.setDirections(response);
//   }
// });


$(document).ready(function() {
  $("#userLocation").click(locateUser);
  $("#userDestination-btn").click(function(){
    var destinationLat = $("#userDestinationLat").val();
    var destinationLng = $("#userDestinationLng").val();
    var destinationResult = destinationSuccess(destinationLat, destinationLng);
  });
});
// $(document).ready(function() {
//   $("#userLocation").on('click', locateUser);
//   $("#userDestination-btn").click(function(){
//     var destination = $("#userDestination").val();
//     var destinationResult = locateDestination(destination);
//     // $("#printout").show(destinationResult);
//   });
// });
//
// $(".number").on('click', {number : 4}, printNumber);
// function printNumber(event){
//    console.log(event.data.number); // 4
// }
