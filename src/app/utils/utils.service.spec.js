describe('UtilsService', function() {
  var UtilsService;

  beforeEach(angular.mock.module('demoApp.tasks')); // <<<

  beforeEach(inject(function(_UtilsService_) {
    UtilsService = _UtilsService_;
  }));

  afterEach(function() {
    UtilsService = null;
  });

  describe('uppercaseText', () => {
    it('Test 1: will uppercase the text, if it is provided', function() {
      let actual;

      actual = UtilsService.uppercaseText('text');

      expect(actual).toEqual('TEXT');
    });

    it('Test 2: will not fail if text is empty', () => {
      let actual;

      actual = UtilsService.uppercaseText(null);

      expect(actual).toBeNull();
    });
  });
});