(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('appController', appController);

  function appController() {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.welcome = 'Hello!';
    }
  }
})();