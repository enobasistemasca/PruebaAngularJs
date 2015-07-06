(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/home'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }

})();
