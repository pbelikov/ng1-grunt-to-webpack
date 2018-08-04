describe('TasksService', function() {
  let TasksService;

  beforeEach(angular.mock.module('demoApp.tasks'));

  beforeEach(inject(function(_TasksService_) {
    TasksService = _TasksService_;
  }));

  afterEach(function() {
    TasksService = null;
  });

  describe('getList', () => {
    it('Test 1: will return list of tasks, with uppercased text', function() {
      let actual;

      actual = TasksService.getList();

      expect(actual.length).toEqual(3);
      expect(actual[0].text).toEqual('TASK 1');
    });
  });
});