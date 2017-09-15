angular.module('travelApp').controller('homeCtrl', function($scope, $stateParams, mainSrv, $state, $rootScope) {

  $scope.getAttraction = function(location) {
    console.log('hello');
    mainSrv.getSomething(location).then(function(response) {
      console.log(response);
      $scope.businesses = response;



    });
  }

// $rootScope.$on('attraction', function(event, business){
//   $scope.business = business;
//   console.log($scope.business);
// })

  // var map = new google.maps.Map(document.getElementById('map'), {
  //        zoom: 14,
  //        center: new google.maps.LatLng(32.777641, -96.795974)
  //      });
  //      (function mapMaker(response) {
  //        let center = {
  //          lat: 32.777641,
  //          lng: -96.795974
  //        }
  //
  //        var marker = new google.maps.Marker({
  //          position: center,
  //          map: map,
  //          label: 'here'
  //        });
  //      })();


})
