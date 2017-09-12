angular.module('travelApp').controller('mainCtrl', function($scope, $http){
  var yelpUrl = 'http://api.yelp.com/business_review_search',
         yelpKey = "-FCMRrKCrYqQ_IU6PIgkKjGjAwqpwePUcEse0JXrGgQghwSbALV39qZCPPmkyjCadl6P-2K3zUkTV8xIavuJGuANv3mC2R8dcBJDBrlpPWM1QIauAgB7YzG0ag24WXYx"
;

     $scope.getLocalBusinesses = function($scope) {
       $http({
         method: 'JSONP',
         url: yelpUrl,
         params: {
           callback: 'JSON_CALLBACK',
           ywsid: yelpKey,
           location: "Dallas"
         }
       }).then(function(data) {
         console.log(data);
         $scope.nearby = data.data.businesses;
       });
     };
   });
