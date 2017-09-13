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


 });
