import {HOME_STATE, DEFAULT_STATE, PROFILE_STATE, TASKS_STATE} from './app.routes';

export default function($stateProvider, $urlRouterProvider) {
   $stateProvider.state(HOME_STATE);
   $stateProvider.state(TASKS_STATE);
   $stateProvider.state(PROFILE_STATE);
   $stateProvider.state(DEFAULT_STATE);

   $urlRouterProvider.otherwise('/');
}