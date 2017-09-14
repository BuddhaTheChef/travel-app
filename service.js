angular.module('travelApp').service('mainSrv', function($http, $rootScope){

// var token = "-FCMRrKCrYqQ_IU6PIgkKjGjAwqpwePUcEse0JXrGgQghwSbALV39qZCPPmkyjCadl6P-2K3zUkTV8xIavuJGuANv3mC2R8dcBJDBrlpPWM1QIauAgB7YzG0ag24WXYx";

var client_secret = 'client_secret=bLFJobpxWtOFwtLie9DuYy85YuU9fFkUKhNrhhhn2FBD4JLUJZDxQ8CK5XcMvBFJ';
  var client_id = 'client_id=SIcz9tmyUGlZtiaa39fBsQ';
  var access_token = 'Bearer -FCMRrKCrYqQ_IU6PIgkKjGjAwqpwePUcEse0JXrGgQghwSbALV39qZCPPmkyjCadl6P-2K3zUkTV8xIavuJGuANv3mC2R8dcBJDBrlpPWM1QIauAgB7YzG0ag24WXYx';
  this.getSomething = function(zip) {
    return $http.post('http://dogcompanydtx.com/api/proxyServer', {
      base_url: 'https://api.yelp.com/v3/businesses/search?',
      query_string:
        client_secret + '&' + client_id + '&location=' + zip + '&term=' + 'tourist_attractions',
      access_token: access_token
    }).then(response => {
      console.log(response.data.businesses);
        // $rootScope.$emit('attraction', attraction){
        //   attraction = response.data.businesses
        // }
        return response.data.businesses;
    });
  };



// this.getSomething(location).then(function(response){
//   console.log('location searched', location);
//
//   var results = response.data.businesses;
//
//   for(var i = 0; i < results.length; i++){
//
//      var obj = {
//        Name: results[i].name,
//        Image: results[i].image_url,
//        Phone: results[i].display_phone,
//        Rating: results[i].rating,
//        Locations: results[i].location.address1
//      }
//     //  console.log(obj)
//
//   }
//
// });
//








 })
