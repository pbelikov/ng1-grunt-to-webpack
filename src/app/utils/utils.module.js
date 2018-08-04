import { UtilsService } from './utils.service';

export const UtilsModule = angular
  .module('demoApp.utils', [])
  .service('UtilsService', UtilsService)
  .name;