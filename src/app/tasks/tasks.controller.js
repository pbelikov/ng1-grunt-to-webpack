export class TasksController {
  constructor(TasksService) {
    'ngInject';
    this.tasksService = TasksService;
  }

  $onInit() {
    this.about = 'This is tasks list, yay!';
    this.tasks = this.tasksService.getList();
  }
}