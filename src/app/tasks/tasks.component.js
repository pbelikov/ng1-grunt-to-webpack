(function() {
  'use strict';

  angular.module('demoApp.tasks').component('tasks', {
    controller: 'tasksController',
    controllerAs: 'tasksCtrl',
    templateUrl: 'src/app/tasks/tasks.tpl.html'
  });
})();