(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('AddController', AddController);

  /** @ngInject */
  function AddController($scope, $http, toastr, $location, $timeout) {
    $scope.formData = {};

    $scope.processForm = function(){
      $http.post('http://www.enobashop.com/angularservices/register.php', $scope.formData).
      success(function(data, status, headers, config) {
        console.log(data);
        $scope.resultado = data;

        if(data == 1){
          toastr.success('Usuario agregado correctamente', '¡Éxito!');
          // Timeout and redirect
          var countUp = function() {
              $location.path( "/home" );
          };

          $timeout(countUp, 1000);
        }
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        toastr.error('No pudo agregarse este usuario. Por favor intente de nuevo', 'Error');
      });
    };



  }
})();
