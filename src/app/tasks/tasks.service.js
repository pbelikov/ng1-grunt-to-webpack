(function() {
  'use strict';

  angular
    .module('demoApp.tasks')
    .service('TasksService', TasksService);

  function TasksService(UtilsService) {
    var service = this;

    service.getList = getList;

    function getList() {
      // Assuming that some call to dataSource is made here, just for a second
      return [{
        id: 1,
        text: 'task 1'
      }, {
        id: 2,
        text: 'task 2'
      }, {
        id: 2,
        text: 'task 3'
      }].map(function(item) {
        item.text = UtilsService.uppercaseText(item.text);
        return item;
      });
    }
  }
})();