angular.module('chilidApp')
        .component('profile', {
          templateUrl: 'views/profile.html',
          bindings: {
            person: '=person'
          }
        });
