angular.module('travelApp').controller('spotCtrl',function($scope, mainSrv, $state, $stateParams){

var city = $stateParams.city




    mainSrv.getSomething($stateParams.city).then(function(response) {
      console.log(response);
      $scope.businesses = response;
    });





})
