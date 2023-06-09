function init() {
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.883796338138474, -87.65370045842398);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'media/m.png'
  });

  var contentString = '<h2>Hamburger University</h2><p>Hamburger University is a training facility at the McDonald\'s Corporation global headquarters in Chicago, Illinois. It instructs high-potential restaurant managers, mid-managers and owner-operators in restaurant management.</p>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
	  infowindow.open(myMap, marker);
  });

google.maps.event.addDomListener(window, 'load', init);
  
  marker.addListener('click', function() {
    infowindow.open(myMap, marker);
  });
}




