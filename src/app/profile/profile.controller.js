(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .controller('ProfileController', ProfileController);



  function ProfileController($scope, $http, toastr, $location, $timeout,$localStorage,$sessionStorage) {
      // Setter
      $scope.profile = {};
      $scope.profileAdd = {};
      $scope.$storage = $localStorage;

      // Getter
      $http.get('http://www.enobashop.com/angularservices/profile.php?id='+ $scope.$storage.user_id).
      success(function(data, status, headers, config) {
        $scope.profile = data;
          if($scope.profile.status == 1)
              $scope.options = [{"valor":"1", "estado":"Activo"}, {"valor":"0", "estado": "Inactivo"}];
          else
              $scope.options = [{"valor":"0", "estado": "Inactivo"}, {"valor":"1", "estado":"Activo"}];
      }).
      error(function(data,status,header,config){
        alert(data);
      });


      // Add
      $scope.profileForm = function(){

        $http.put('http://www.enobashop.com/angularservices/profile_add.php', $scope.profileAdd)

        .success(function(data){
          if(data == 0){
            toastr.error('El usuario no pudo ser agregado', 'Error');
          }else if(data == 1){
            toastr.success('El usuario fue agregado correctamente', '¡Éxito!');
            // Timeout and redirect
            var countUp = function() {
                $location.path( "/home" );
            };
            $timeout(countUp, 2000);
          }
        })
        .error(function(data, code){
          alert(code);
        });
      };

      // Update
      $scope.profileUpdateForm = function(){
        $http.put('http://www.enobashop.com/angularservices/profile_update.php', $scope.profile)

        .success(function(data){
          if(data == 0){
            toastr.error('Ha ocurrido un error al guardar la información', 'Error');
          }else if(data == 1){
            toastr.success('Los datos han sido guardados exitosamente', '¡Éxito!');
            // Timeout and redirect
            var countUp = function() {
                $location.path( "/home" );
            };
            $timeout(countUp, 3500);
          }
        })
        .error(function(data, code){
          alert(code);
        });
      };

  }
})();
