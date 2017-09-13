angular.module('travelApp').controller('mainCtrl', function($scope,mainSrv){


  mainSrv.yelpInformation().then(function(response){
    console.log(response)
  })



   });
