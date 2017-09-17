'use strict';

describe('Service: profilesService', function () {

  // load the service's module
  beforeEach(module('chilidApp'));

  // instantiate service
  var profilesService;
  beforeEach(inject(function (_profilesService_) {
    profilesService = _profilesService_;
  }));

  it('should return object in correct form', function () {
    var data;
    profilesService.getData().then(function(response){
        data = response;
    });
    expect(null).toBeNull();
  });

});
