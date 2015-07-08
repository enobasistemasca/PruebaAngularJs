(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $http, toastr, $location, $timeout) {
    $scope.busqueda = "";
    $scope.resultados="";
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

    $scope.eliminar = function(usuario){

      $http.get('http://www.enobashop.com/angularservices/delete_customer.php?id='+usuario.id).
      success(function(data, status, headers, config) {
        if(data){
          $scope.resultados.splice( $scope.resultados.indexOf(usuario), 1 );
          toastr.success('Usuario eliminado', '¡Éxito!');          
        }else{
          toastr.error('El usuario no pudo ser eliminado', 'Error');
        }
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  }
})();
