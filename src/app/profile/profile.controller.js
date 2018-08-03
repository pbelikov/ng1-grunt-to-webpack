(function() {
  'use strict';

  angular.module('demoApp.profile').controller('profileController', profileController);

  function profileController() {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.name = 'Gr...Gr...John';
    }
  }
})();