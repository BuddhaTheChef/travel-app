angular.module('travelApp').controller('mapCtrl', function($scope, mainSrv, $stateParams){

console.log($stateParams.attraction);
var city = $stateParams.attraction

mainSrv.getSomething(city).then(function(response){
  $scope.theCity = response[0].location.city
  console.log(response[0].location.city);
  console.log(response);
  $scope.businesses = response;

  $scope.lat = response[0].coordinates.latitude;
  $scope.lng = response[0].coordinates.longitude;
  initMap($scope.lat, $scope.lng);

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                          //  Google MAP CREATEOR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    // connecting Google maps with Yelp to make markers
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function createMarker(place) {
// var lat = results[i].coordinates.latitude;
// var lon = results[i].coordinates.longitude;
// var marker = new google.maps.Marker({
// map: map,
// position: place.geometry.location
// });




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    //Top 15 results in yelp Api
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//        mainSrv.getSomething().then(function(response){
//          console.log(response);
// $scope.businesses = response.data.businesses;


        //  for(var i = 0; i < results.length; i++){

            // var obj = {
            //   Name: results[i].name,
            //   Image: results[i].image_url,
            //   Phone: results[i].display_phone,
            //   Rating: results[i].rating
            //
            // }
            // console.log(obj)



        // });


 });

 function initMap(lat, lng) {
   var search = {lat: lat, lng: lng};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: search
   });

  var marker = new google.maps.Marker({
     position: search,
     map: map
   });

 }

 initMap( 32.7755322701621, -96.8088208949411);
