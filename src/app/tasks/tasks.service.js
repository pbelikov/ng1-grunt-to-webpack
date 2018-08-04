export class TasksService {
  constructor(UtilsService) {
    'ngInject';
    this.utilsService = UtilsService;
  }

  getList() {
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
    }].map((item) => {
      item.text = this.utilsService.uppercaseText(item.text);
      return item;
    });
  }
}