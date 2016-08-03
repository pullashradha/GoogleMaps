var apiKey = require('./../.env').apiKey;

//User Functions
function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
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


$(document).ready(function() {
  $("#userLocation").click(locateUser);
});
