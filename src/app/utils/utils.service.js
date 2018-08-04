export const NgUtilsService = angular
    .module('demoApp.utils')
    .service('UtilsService', UtilsService);

  function UtilsService() {
    var service = this;

    service.uppercaseText = uppercaseText;

    function uppercaseText(text) {
      return text ? text.toUpperCase() : text;
    }
  }