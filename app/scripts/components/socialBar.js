'use strict';

angular.module('chilidApp')
        .component('socialBar', {
          templateUrl: 'views/socialBar.html',
          bindings: {
            social: '<',
            onAddFollowers: '&'
          }
        });
