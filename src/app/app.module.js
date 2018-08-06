import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appConfig from './app.config';
import { ProfileModule } from "./profile/profile.module";
import { TasksModule } from "./tasks/tasks.module";
import {appComponent} from "./app.component";

export const AppModule = angular
  .module('demoApp', [
    uiRouter,
    ProfileModule,
    TasksModule
  ])
  .component('app', appComponent)
  .config(appConfig)
  .name;