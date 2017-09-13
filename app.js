angular.module('travelApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('home',{
        url:'/',
        templateUrl: "./views/home.html"
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
        url:'/spots',
        templateUrl: "./views/spots.html"

    })

    .state('map',{
        url:'/map',
        templateUrl: "./views/map.html",
        controller:"mapCtrl"
    });


      $urlRouterProvider
          .otherwise('/');
  });
