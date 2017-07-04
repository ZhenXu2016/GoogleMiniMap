function initMap() {
  var Ames = {lat: 42.0308, lng: -93.6319};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: Ames
  });
  var marker = new google.maps.Marker({
    position: Ames,
    map: map
  });
}
