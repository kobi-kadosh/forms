'use strict';

describe('Controller: W4Ctrl', function () {

  // load the controller's module
  beforeEach(module('formsApp'));

  var W4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    W4Ctrl = $controller('W4Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(W4Ctrl.awesomeThings.length).toBe(3);
  });
});
