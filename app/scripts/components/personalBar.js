'use strict';

angular.module('chilidApp')
        .component('personalBar', {
          templateUrl: 'views/personalBar.html',
          bindings: {
            personName: '<',
            personAdress: '<',
            location: '<',
            onAddLike: '&'
          }
        });
