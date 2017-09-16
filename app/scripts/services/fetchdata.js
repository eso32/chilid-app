'use strict';

/**
 * @ngdoc service
 * @name chilidApp.fetchData
 * @description
 * # fetchData
 * Service in the chilidApp.
 */
angular.module('chilidApp')
  .factory('fetchData', function($http) {
    return $http({
    method: 'GET',
    url: 'profiles.json',
    headers: {
     'Content-Type': 'application/json'
    }
    }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log('Error occured '+response.status);
      });
  });
