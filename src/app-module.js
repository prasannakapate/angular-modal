(function() {
  'use strict';

  angular
    .module('angular-modal', ['ui.bootstrap', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
        url: '/home',
        abstract: true
      })
      .state('about', {
      });
    });
})();
