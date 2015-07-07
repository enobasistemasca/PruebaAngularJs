(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('EditController', EditController);

  /** @ngInject */
  function EditController($scope, $http, toastr, $location, $timeout, $routeParams) {
    $scope.formData = {};
    //console.log($routeParams.id);

    $http.get('http://www.enobashop.com/angularservices/update.php', $routeParams.id).
    success(function(data, status, headers, config) {
      console.log(data);
      $scope.formData = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }
})();
