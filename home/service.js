angular.module('travelApp').service('mainSrv', function($http){

var token = "FCMRrKCrYqQ_IU6PIgkKjGjAwqpwePUcEse0JXrGgQghwSbALV39qZCPPmkyjCadl6P-2K3zUkTV8xIavuJGuANv3mC2R8dcBJDBrlpPWM1QIauAgB7YzG0ag24WXYx";

this.yelpInformation = function(){

$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

return $http.get("https://api.yelp.com/v3/businesses/search?term=wineries&latitude=32.7767&longitude=-96.7970")
//return $http({
//  method: "GET",
//  url: "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972",
  //headers: {
  //  'Authorization': 'Bearer -FCMRrKCrYqQ_IU6PIgkKjGjAwqpwePUcEse0JXrGgQghwSbALV39qZCPPmkyjCadl6P-2K3zUkTV8xIavuJGuANv3mC2R8dcBJDBrlpPWM1QIauAgB7YzG0ag24WXYx'
//  }
//})
.then(function(response){
  return response;
  console.log(response)
});
}

})
