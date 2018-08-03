(function() {
  'use strict';

  angular
    .module('demoApp.profile')
    .component('profile', {
      controller: 'profileController',
      controllerAs: 'profileCtrl',
      templateUrl: 'src/app/profile/profile.tpl.html'
    });
})();