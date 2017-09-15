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
      this.businessesMarkers = response.data.businesses;
      console.log(response.data.businesses.map(location => {
        return {
          location:location.coordinates,
           name: location.name
        }
      } ))


        return response.data.businesses;
    });
  };


this.attractionList = [];










 })
