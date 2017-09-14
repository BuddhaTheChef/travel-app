angular.module('travelApp').controller('mapCtrl', function($scope, mainSrv){

  var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 14,
         center: new google.maps.LatLng(32.777641, -96.795974)
       });
       (function mapMaker(response) {
         let center = {
           lat: 32.777641,
           lng: -96.795974
         }

         var marker = new google.maps.Marker({
           position: center,
           map: map,
           label: 'here'
         });
       })();


       mainSrv.getSomething().then(function(response){
         console.log(response);
$scope.businesses = response.data.businesses;


        //  for(var i = 0; i < results.length; i++){

            var obj = {
              Name: results[i].name,
              Image: results[i].image_url,
              Phone: results[i].display_phone,
              Rating: results[i].rating

            }
            console.log(obj)

        });


 });
