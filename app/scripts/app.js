'use strict';

/**
 * @ngdoc overview
 * @name rtfmApp
 * @description
 * # rtfmApp
 *
 * Main module of the application.
 */
angular
  .module('rtfmApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase', 
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
    //   $stateProvider
    //     .state('login', {
    //       url: '/login',
    //       templateUrl: '/views/login.html',
    //       controller: 'LoginCtrl'
    // })
  });
