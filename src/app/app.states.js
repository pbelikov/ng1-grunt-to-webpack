(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(function($stateProvider, $urlRouterProvider) {

      var tasksState = {
        name: 'home.tasks',
        url: '/tasks',
        component: 'tasks'
      };

      var profileState = {
        name: 'home.profile',
        url: '/profile',
        component: 'profile'
      };

      var homeState = {
        name: 'home',
        url: '/home',
        component: 'app'
      };

      var defaultState = {
        name: 'default',
        url: '/',
        redirectTo: 'home'
      };

      $stateProvider.state(homeState);
      $stateProvider.state(tasksState);
      $stateProvider.state(profileState);
      $stateProvider.state(defaultState);

      $urlRouterProvider.otherwise('/');
    });
})();