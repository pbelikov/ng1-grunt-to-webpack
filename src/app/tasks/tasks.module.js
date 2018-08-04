import { tasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';
import { UtilsModule } from '../utils/utils.module';

export const TasksModule = angular
  .module('demoApp.tasks', [
    UtilsModule
  ])
  .component('tasks', tasksComponent)
  .service('TasksService', TasksService)
  .name;