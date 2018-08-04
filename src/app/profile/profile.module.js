import {profileComponent} from "./profile.component";

export const ProfileModule = angular
  .module('demoApp.profile', [])
  .component('profile', profileComponent)
  .name;