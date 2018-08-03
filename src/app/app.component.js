(function() {
  angular
    .module('demoApp')
    .component('app', {
      controller: 'appController',
      controllerAs: 'appCtrl',
      templateUrl: 'src/app/app.tpl.html'
    });
})();