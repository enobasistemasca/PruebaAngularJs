(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('EditController', EditController);

  /** @ngInject */
  function EditController($scope, $http, toastr, $location, $timeout, $routeParams) {
    $scope.formData = {};
    $scope.options = {};
    //get user data
    $http.get('http://www.enobashop.com/angularservices/fetch_single.php?id='+$routeParams.id).
    success(function(data, status, headers, config) {

      $scope.formData = data;
      if($scope.formData.status == 1)
        $scope.options = [{"valor":"1", "estado":"Activo"}, {"valor":"0", "estado": "Inactivo"}];
      else
        $scope.options = [{"valor":"0", "estado": "Inactivo"}, {"valor":"1", "estado":"Activo"}];
    }).
    error(function(data, status, headers, config) {
      toastr.error('No fue posible obtener los datos de este usuario. Por favor intente de nuevo', 'Error');
    });

    //action form
    $scope.processForm = function(){
      $http.post('http://www.enobashop.com/angularservices/update.php', $scope.formData).
      success(function(data, status, headers, config) {
        if(data == 1){
          toastr.success('Usuario editado correctamente', '¡Éxito!');
          // Timeout and redirect
          var countUp = function() {
              $location.path( "/home" );
          };

          $timeout(countUp, 1000);
        }
      }).
      error(function(data, status, headers, config) {
        toastr.error('No pudo editarse este usuario. Por favor intente de nuevo', 'Error');
      });
    };

  }
})();
