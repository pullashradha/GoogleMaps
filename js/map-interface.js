var createMap = require("./../js/map.js").mapModule;

$(document).ready(function(event) {
  $("#directions-form").submit(function(event) {
    event.preventDefault();
    var originInput = $("#origin-input").val();
    var destinationInput = $("#destination-input").val();
    createMap(originInput, destinationInput);
  });
});
