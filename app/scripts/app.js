'use strict';

/**
 * @ngdoc overview
 * @name formsApp
 * @description
 * # formsApp
 *
 * Main module of the application.
 */
angular.module('formsApp', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/w4', {
        templateUrl: 'views/w4.html',
        controller: 'W4Ctrl',
        controllerAs: 'w4'
      })
      .when('/w9', {
        templateUrl: 'views/w9.html',
        controller: 'W9Ctrl',
        controllerAs: 'w9'
      });

    // configure html5
    $locationProvider.html5Mode(true);
  });

