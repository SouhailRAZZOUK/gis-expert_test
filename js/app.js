// 
// (function () {
  // "use strict";

  var app = WinJS.Application;
  //var activation = Windows.ApplicationModel.Activation;
  WinJS.strictProcessing();

    app.onactivated = function (args) {
        //if (args.detail.kind === activation.ActivationKind.launch) {
            //if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
            //    // TODO: This application has been newly launched. Initialize
            //    // your application here.
            //} else {
            //    // TODO: This application has been reactivated from suspension.
            //    // Restore application state here.
            //}
            //args.setPromise(WinJS.UI.processAll());
        //}
    };

  app.oncheckpoint = function (args) {
      // TODO: This application is about to be suspended. Save any state
      // that needs to persist across suspensions here. You might use the
      // WinJS.Application.sessionState object, which is automatically
      // saved and restored across suspension. If you need to complete an
      // asynchronous operation before your application is suspended, call
      // args.setPromise().
  };

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

    L.marker([position.lat, position.lng], {icon: pinIcon}).addTo(map);
    
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
      alert("Geolocation is not supported by your browser, please consedire upgrading your browser, or enable Geolocation if disabled");
    }
    
  }
  
  var pinIcon = L.icon({
          iconUrl: 'images/mappin.png',
          iconSize:     [65, 105], // size of the icon
          iconAnchor:   [32, 105], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      }),
      
      map = L.map('map').setView([29.726, -7.031], 5);
      
  
  WinJS.UI.processAll().done(function () {
    
    var appBar = document.getElementById("createAppBar").winControl;
        
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> Made for GIS Expert | Mady by: <a href="http://souhailrazzouk.somee.com/" title="Souhail RAZZOUK" target="_blank">Souhail RAZZOUK</a>',
        subdomains: ['a','b','c']
    }).addTo(map);
      
    appBar.getCommandById("cmdLocate").addEventListener("click", function () { locateUser(); appBar.hide(); }, false);
    appBar.show();
    
  });
  
// })();