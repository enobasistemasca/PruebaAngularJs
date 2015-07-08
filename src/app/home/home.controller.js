(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $http) {
    $scope.busqueda = "";
    $scope.users="";
    $scope.filtro="";

    $http.get('http://www.enobashop.com/angularservices/fetch.php').
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
