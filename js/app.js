(function () {
  "use strict";

  var app = WinJS.Application;
  WinJS.strictProcessing();

  app.start();

  function initialize() {
      WinJS.UI.processAll();
  }
  
  document.addEventListener("DOMContentLoaded", initialize(), false);
  
  function getUserCoordinations(position) {
  
    var usrPosition = {};  
    usrPosition.lat = position.coords.latitude 
    usrPosition.lng = position.coords.longitude;
    return usrPosition;
  
  }

  function drawMarker(position) {

    var pin = L.marker([position.lat, position.lng], {icon: pinIcon}).addTo(map);
    pin.bindPopup("<b>You look like to be here</b>").openPopup();
    
  }
  
  function focusOnUserLocation(position) {
    
    map.panTo(new L.LatLng(position.lat, position.lng), {
      animate: true,
      duration: .5
    });
    
    map.zoomIn(8, {
      animate: true
    });
    
  }

  function onSuccess(position) {
  
    var pinLocation = getUserCoordinations(position);
    drawMarker(pinLocation);
    focusOnUserLocation(pinLocation);
  
  }  
  
  function onError(error) {
    var errors = { 
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    alert("An error occured: " + errors[error.code]);
  }
  
  function locateUser() {
  
    if (navigator.geolocation) {
      var timeoutValue = 15 * 1000 * 1000;
      navigator.geolocation.getCurrentPosition(
        onSuccess, 
        onError, 
        { enableHighAccuracy: true, timeout: timeoutValue}
      );
    }
    else {
      alert("Geolocation is not supported on your browser, please consedire upgrading.");
    }
    
  }
  
  var pinIcon = L.icon({
          iconUrl: 'images/mappin.png',
          iconSize:     [65, 105], // size of the icon
          iconAnchor:   [32, 105], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -70] // point from which the popup should open relative to the iconAnchor
      }),
      
      map = L.map('map').setView([0, 0], 1); // setting the map LatLng on Morocco was not convincing enough :)
      
  
  WinJS.UI.processAll().done(function () {
    
    var appBar = document.getElementById("createAppBar").winControl;
        
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> Made for GIS Expert | Mady by: <a href="http://souhailrazzouk.somee.com/" title="Souhail RAZZOUK" target="_blank">Souhail RAZZOUK</a>',
        subdomains: ['a','b','c']
    }).addTo(map);
      
    appBar.getCommandById("cmdLocate").addEventListener("click", function () { locateUser(); appBar.hide(); }, false);
    appBar.show();
    
  });
  
})();