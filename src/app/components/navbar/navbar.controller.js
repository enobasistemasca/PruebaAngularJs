(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('NavbarController', NavbarController);

  function NavbarController($scope, $http, toastr, $location, $timeout,$localStorage,$sessionStorage,$window) {
    $scope.isCollapsed = false;
      $scope.logout = function(){
        var answer = confirm("¿Cerrar sesión?")
            if (answer) {
                $localStorage.$reset();
                toastr.success('', 'Sesión finalizada exitosamente');
                $location.path( "/" );
            }
      };
  }

})();
