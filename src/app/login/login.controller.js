(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('LoginController', LoginController);

  /** @ngInject */
  // Login Controller
  function LoginController($scope, $http, toastr, $location, $timeout) {
      $scope.user = {};
      $scope.forgot = {};

      $scope.loginForm = function(){
        $http.put('http://www.enobashop.com/angularservices/login.php', $scope.user)

        .success(function(data){
          if(data === 0){
            toastr.error('El nombre de usuario no existe', 'Error');
          }else if(data === 2){
            toastr.warning('La contraseña no coincide', 'Error');
          }else{
            toastr.success('Sesión iniciada correctamente', '¡Éxito!');
            // Timeout and redirect
            var countUp = function() {
                $location.path( "/home" );
            };
            $timeout(countUp, 500);
          }
        })
        .error(function(data, code){
          alert(code);
        });
      };

      $scope.forgotForm = function(){
        $http.put('http://www.enobashop.com/angularservices/forgot.php', $scope.forgot)

        .success(function(data){
          if(data === 0){
            toastr.error('El nombre de usuario no existe', 'Error');
          }else if(data === 1){
            toastr.success('La nueva contraseña se ha enviado al correo electrónico', '¡Éxito!');
          }
        })
        .error(function(data, code){
          alert(code);
        });
      };
  }
})();
