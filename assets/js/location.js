/**
 *  Google Maps Timezone API key: AIzaSyCoc74GBPHSqKV3km5hGmdesC3lplu1M6s
 */

function success(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;

  var timeZone = $.getJSON( "https://maps.googleapis.com/maps/api/timezone/json?location="+latitude+","+longitude+"&timestamp=1458000000&key=AIzaSyCoc74GBPHSqKV3km5hGmdesC3lplu1M6s", function(data) {
    console.log( "success", data );
    return data;
  }).fail(function() {
    console.log( "error" );
  });
  console.log(timeZone)
}

function error() {
  console.log("Unable to retrieve your location");
  /**

    TODO:
    - Set default time to "world clock"
    - Icon for weather?

   */

}

// Clock
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}