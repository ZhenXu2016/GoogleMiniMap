var DEFAULT_LAT = 42.0308;
var DEFAULT_LNG = -93.6319;
var GOOGLE_API_KEY = 'AIzaSyBNtLj7PjM_YoBg6k7ioydVV9EwEc6m8oA';
var DEFAULT_ZOOM = 15;
var SEARCH_RADIUS = 500;

function initMap() {
  var position = {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG
  };
 
  var map = new google.maps.Map($('#map')[0], {
    zoom: DEFAULT_ZOOM,
    center: position
  });

  var marker = new google.maps.Marker({
    position: position,
    map: map
  });

  $.ajax({
    url: '/nearby_search',
    data: {
      'location': position.lat + ',' + position.lng,
      'type': 'restaurant',
      'key': GOOGLE_API_KEY,
      'radius': SEARCH_RADIUS
    },
    
    success: function(data) {
      debugger;
    },

    failure: function(data) {
      debugger;
    }
  });
}
