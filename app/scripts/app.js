'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import mainCtrl from './controllers/main';

/**
 * @ngdoc overview
 * @name formsApp
 * @description
 * # formsApp
 *
 * Main module of the application.
 */
angular.module('formsApp', [
    uirouter,
    'ngSanitize',
    'ngAnimate'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('w4', {
        url: "/w4",
        templateUrl: "views/w4.html",
        controller: 'W4Ctrl',
        controllerAs: 'w4'
      })
      .state('w9', {
        url: "/w9",
        templateUrl: "views/w9.html",
        controller: 'W9Ctrl',
        controllerAs: 'w9'
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });

    // configure html5
    $locationProvider.html5Mode(true);
  })

  .controller('MainCtrl', mainCtrl);
