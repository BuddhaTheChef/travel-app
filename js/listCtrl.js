angular.module('travelApp').controller('listCtrl',function($scope,mainSrv){
  $scope.attractionList = mainSrv.attractionList;
  console.log('?????')
  console.log(mainSrv.attractionList)

// set id for the card and delete
// make a function that deletes ummmm deletes the card by adding display none
// then
// $delete button getElementbyID(id.setforcard)
// addClass(display:none)
// $('#delete').getElementbyID('#card').addClass('hideCard')
//
// .hideCard {
//   display: none;
// }

$scope.showId= function(id){
  console.log(id)
}


$scope.deleteList= function(){
  for (var i=0;i<$scope.attractionList.length;i++){
    for (var key in $scope.attractionList[i]){
    if ($scope.attractionList[i][key] == this.business.id) {
      $scope.attractionList.splice($scope.attractionList.indexOf(this.business), 1);
      i--;
    }
  }
}
  // $scope.attractionList.splice($scope.attractionList.indexOf(this.business), 1);
  // console.log($scope.attractionList);
}



})
