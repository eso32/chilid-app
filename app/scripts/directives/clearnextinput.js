'use strict';

/**
 * @ngdoc directive
 * @name chilidApp.directive:clearNextInput
 * @description
 * # clearNextInput
 */
angular.module('chilidApp')
  .directive('clearNextInput', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('click', function(){
          element.next().val('');
        });
      }
    };
  });
