export const AppModule = angular
    .module('demoApp', [
      'ui.router',
      'demoApp.profile',
      'demoApp.tasks'
    ]).name;