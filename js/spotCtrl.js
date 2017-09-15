angular.module('travelApp').controller('spotCtrl',function($scope, mainSrv, $state, $stateParams){

var city = $stateParams.city




    mainSrv.getSomething($stateParams.city).then(function(response) {
      console.log(response);
      $scope.businesses = response;
    });



    $scope.addToAttractionList = function(business){
      mainSrv.attractionList.push(business)
      console.log(mainSrv.attractionList)
    }
//////////////////////////////////////////////////////oncoming carosal///////////////////////////////////////////////////////////////////////


});
