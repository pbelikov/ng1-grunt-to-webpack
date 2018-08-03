describe('TasksService', function() {
  var TasksService;

  beforeEach(module('demoApp.tasks'));

  beforeEach(inject(function(_TasksService_) {
    TasksService = _TasksService_;
  }));

  afterEach(function() {
    TasksService = null;
  });

  describe('getList', function() {
    it('Test 1: will return list of tasks, with uppercased text', function() {
      var actual;

      actual = TasksService.getList();

      expect(actual.length).toEqual(3);
      expect(actual[0].text).toEqual('TASK 1');
    });
  });
});