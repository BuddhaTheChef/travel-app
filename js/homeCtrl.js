angular.module('travelApp').controller('homeCtrl', function($scope, $stateParams, mainSrv, $state, $rootScope,$anchorScroll,$location) {

  $scope.getAttraction = function(location) {
    console.log('hello');
    mainSrv.getSomething(location).then(function(response) {
      console.log(response);
      $scope.businesses = response;



    });
  }

$scope.scrollAbout = function(){
  $location.hash("about-bot");
  $anchorScroll();
}

})
