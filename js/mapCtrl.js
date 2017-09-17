angular.module('travelApp').controller('mapCtrl', function($scope, mainSrv, $stateParams,$anchorScroll,$location){
console.log(mainSrv.businessesMarkers);
// console.log($stateParams.attraction);
var city = $stateParams.attraction

// var markers = [
//       ['London Eye, London', 51.503454,-0.119562],
//       ['Palace of Westminster, London', 51.499633,-0.124755]
//   ];


mainSrv.getSomething(city).then(function(response){
  console.log(mainSrv);
  $scope.theCity = response[0].location.city
  console.log(response[0].location.city);
  console.log(response);
  $scope.businesses = response;

  $scope.lat = response[0].coordinates.latitude;
  $scope.lng = response[0].coordinates.longitude;
  initMap($scope.lat, $scope.lng);

})
var map;
function initMap(lat, lng) {
  var search = {lat: lat, lng: lng};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: search
  });
///
var markers = [];

 function businessMarkers(results) {
   console.log(results);
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
 //  console.log(mainSrv);
 // console.log(mainSrv.businessesMarkers);
  businessMarkers(mainSrv.businessesMarkers)

 function createMarker(place) {
      // var placeLoc = place.geometry.location;
      console.log(place.coordinates.latitude, place.coordinates.longitude);
      var marker = new google.maps.Marker({
        map: map,
        title: place.name,
        animation: google.maps.Animation.DROP,
        position: {
          lat: place.coordinates.latitude,
          lng: place.coordinates.longitude
        }
      });
      var infowindow = new window.google.maps.InfoWindow();
console.log(infowindow)

      marker.addListener('mouseover', function(){
         map.setZoom(15);
        map.setCenter(marker.getPosition());
        infowindow.setContent(place.name + '<br>' + place.display_phone);

          //  infowindow.setContent(place.name + ‘<br>’ + place.vicinity + ‘<br>’ + (openNow || ‘’));
           infowindow.open(map, this);

           marker.addListener('mouseout', function(){
             map.setZoom(15);
            map.setCenter(marker.getPosition());
            infowindow.setContent(place.name + '<br>' + place.display_phone);

              //  infowindow.setContent(place.name + ‘<br>’ + place.vicinity + ‘<br>’ + (openNow || ‘’));
               infowindow.close(map, this);
           })
      })

  }




}




 });
