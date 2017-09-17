'use strict';

describe('profile', function () {
  var $componentController, controller;
  // load the service's module
  beforeEach(module('chilidApp'));
  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('profile', { $scope: {}});

    controller.person = {
      social: {
        likes: 100,
        followers: 50
      },
      comments: []
    };
  }));

    it('should increment number of likes', function() {
      controller.addlike();
      expect(controller.person.social.likes).toEqual(101);
    });

    it('should increment number of followers', function() {
      controller.addfollowers();
      expect(controller.person.social.followers).toEqual(51);
    });

    it('should add comment to person object in correct form', function() {
      var author = "Bob test",
          text = "Testing comment";
      controller.addcomment(author, text)
      expect(controller.person.comments.length).toEqual(1);
      expect(controller.person.comments[0].avatar).toEqual('images/bobtest.jpg');
      expect(controller.person.comments[0].author).toEqual(author);
      expect(controller.person.comments[0].creationDate).toEqual(jasmine.any(String));

    });


});
