function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.88423965688473, -87.65348588130207);
  var mapOptions = {
    center: myLocation,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/m.png',
      scaledSize: new google.maps.Size(60, 60) // Adjust the size as per your requirement
    }
  });


  var contentString = '<h2>Hamburger University</h2><p>Hamburger University is a training facility at the McDonald\'s Corporation global headquarters in Chicago, Illinois. It instructs high-potential restaurant managers, mid-managers and owner-operators in restaurant management.</p>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
	  infowindow.open(myMap, marker);
  });

  
  marker.addListener('click', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', init);