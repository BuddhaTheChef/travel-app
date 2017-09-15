angular.module('travelApp').controller('listCtrl',function($scope,mainSrv){
  $scope.attractionList = mainSrv.attractionList;
  console.log('?????')
  console.log(mainSrv.attractionList)
})
