'use strict';

describe('Controller: W9Ctrl', function () {

  // load the controller's module
  beforeEach(module('formsApp'));

  var W9Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    W9Ctrl = $controller('W9Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(W9Ctrl.awesomeThings.length).toBe(3);
  });
});
