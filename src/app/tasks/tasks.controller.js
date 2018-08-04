export const NgTasksController = angular
    .module('demoApp.tasks')
    .controller('tasksController', tasksController);

  function tasksController(TasksService) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.about = 'This is tasks list, yay!';
      ctrl.tasks = TasksService.getList();
    }
  }