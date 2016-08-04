var createMap = require("./../js/map.js").mapModule;

$(document).ready(function(event) {
  $("#city-form").submit(function(event) {
    event.preventDefault();
    var cityInput = $("#city-name").val();
    createMap(cityInput);
  });
});
