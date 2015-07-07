(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('AddController', AddController);

  /** @ngInject */
  function AddController($scope, $http) {
    $scope.formData = {};
    
    $http.get('http://www.enobasistemas.com/angularservices/register.php', $scope.formData).
    success(function(data, status, headers, config) {
      $scope.resultados = data;
      $scope.cantUsuarios = $scope.resultados.length;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });


  }
})();
