'use strict';

describe('Directive: scrollDown', function () {

  // load the directive's module
  beforeEach(module('chilidApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-down></scroll-down>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollDown directive');
  }));
});
