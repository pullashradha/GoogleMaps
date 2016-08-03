var apiKey = require('./../.env').apiKey;
var GoogleMap = require("./../js/map.js").mapModule;

$(document).ready(function() {
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap') function(response) {
    $('.showMap').show(GoogleMap);
  });
});
