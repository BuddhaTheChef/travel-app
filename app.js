angular.module('travelApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('home',{
        url:'/',
        templateUrl: "./views/home.html",
        controller: "homeCtrl"
    })
    .state('list',{
        url:'/list',
        templateUrl: "./views/list.html"
    })
    .state('about',{
        url:'/about',
        templateUrl: "./views/about.html"
    })
    .state('spots',{
        url:'/spots/:city',
        templateUrl: "./views/spots.html",
        controller: 'spotCtrl'
    })

    .state('map',{
        url:'/map/:attraction',
        templateUrl: "./views/map.html",
        controller:"mapCtrl"
    });


      $urlRouterProvider
          .otherwise('/');
  });
