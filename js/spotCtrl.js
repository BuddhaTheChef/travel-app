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
$scope.isClosed = function(){
  if(business.is_closed === false){
    return "We Are Open"
  }
  else if(business.is_closed === true){
    return " Sorry We're Closed"
  }
}

});
