(function() {
  'use strict';

  angular
    .module('demoApp', [
      'ui.router',
      'demoApp.profile',
      'demoApp.tasks'
    ]);
})();
