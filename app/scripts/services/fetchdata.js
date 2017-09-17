'use strict';

/**
 * @ngdoc service
 * @name chilidApp.fetchData
 * @description
 * # fetchData
 * Service in the chilidApp.
 */
angular.module('chilidApp')
    .service('profilesService', function($http){
      return{
        getData: function(){
          return $http.get('profiles.json').then(function(response){
            return response;
          });
        }
      };
    });
