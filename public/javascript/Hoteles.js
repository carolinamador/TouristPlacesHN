/*** code gen by gk-position  ***/ ;
$(document).on("gkComponentsReady", function () {
  function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $("#gk-728FcbD").html("Latitude: " + latitude + "<br /> Longitude: " + longitude);
  }

  function onError(error) {
    // onError Callback receives a PositionError object
  }
  if (navigator.geolocation) {
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
      timeout: 10000
    });
  }
});
/*** code gen by gk-position  ***/
;
$(document).on("gkComponentsReady", function () {
  function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $("#gk-728ZTio").html("Latitude: " + latitude + "<br /> Longitude: " + longitude);
  }

  function onError(error) {
    // onError Callback receives a PositionError object
  }
  if (navigator.geolocation) {
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
      timeout: 10000
    });
  }
});
